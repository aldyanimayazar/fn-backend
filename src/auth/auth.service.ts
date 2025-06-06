import { BadRequestException, Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { UsersService } from '../users/users.service';
import { RegisterDto } from './dto/register.dto';
import { RolesService } from 'src/roles/roles.service';
import { RolesDocuments } from 'src/roles/model/role.schema';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
    protected rolesService: RolesService,
  ) { }

  async validateUser(email: string, pass: string) {
    const user = await this.usersService.findByEmail(email);
    if (user && bcrypt.compare(pass, user.password)) {
      const { password, ...result } = user.toObject();
      return result;
    }
    return null;
  }

  async login(user: any) {
    const payload = {
      sub: user._id,
      email: user.email,
      userType: user.roles?.userType,
      roles: user.roles,
      activationStatus: user.activationStatus,
      verifiedStatus: user.verifiedStatus,
    };

    return {
      access_token: this.jwtService.sign(payload),
      refresh_token: this.jwtService.sign(payload, { expiresIn: '7d' }),
    };
  }

  async refresh(refreshToken: string) {
    try {
      const payload = this.jwtService.verify(refreshToken);
      return {
        access_token: this.jwtService.sign(
          {
            sub: payload.sub,
            email: payload.email,
            userType: payload.userType,
            roles: payload.roles,
          },
          { expiresIn: '15m' },
        ),
      };
    } catch {
      throw new UnauthorizedException('Invalid refresh token');
    }
  }

  async register(dto: RegisterDto) {
    try {
      // Fetch the role document
      const role = await this.rolesService.findbyId(dto.rolesId) as RolesDocuments;

      if (!role) {
        throw new Error('Cannot find rolesId');
      }

      // Enforce branch requirement for branch-specific roles
      if (
        (role.userType === 'BRANCH_ADMIN' || role.userType === 'SHOP_KEEPER') &&
        !dto.branch
      ) {
        throw new BadRequestException('Branch is required for this role');
      }

      // Check for existing email
      const existing = await this.usersService.findByEmail(dto.email);
      if (existing) {
        throw new Error('Email already in use');
      }

      // Hash password
      const hashed = await bcrypt.hash(dto.password, 10);

      // Create user
      const user = await this.usersService.create({
        ...dto,
        password: hashed,
        roles: {
          rolesId: role.rolesId,
          userType: role.userType,
        },
      });

      const { password, ...result } = user.toObject();
      return result;
    } catch (error) {
      console.error('Register Error:', error); // optional for logging
      throw new BadRequestException(error.message || 'Registration failed');
    }
  }

}
