import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { UsersService } from '../users/users.service';
import { RegisterDto } from './dto/register.dto';
import { RolesService } from 'src/roles/roles.service';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
    protected rolesService: RolesService,
  ) {}

  async validateUser(email: string, pass: string) {
    const user = await this.usersService.findByEmail(email);
    if (user && bcrypt.compare(pass, user.password)) {
      const { password, ...result } = user;
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
      const existing = await this.usersService.findByEmail(dto.email);
      if (existing) throw new Error('Email already in use');
      const findRoles = await this.rolesService.findbyId(dto.rolesId);
      if(findRoles) throw new Error('cannot find rolesId');
      const hashed = await bcrypt.hash(dto.password, 10);
      const user = await this.usersService.create({
        ...dto,
        password: hashed,
        roles: {
          rolesId:  findRoles.rolesId,
          userType:  findRoles.userType,
        },
      });
  
      const { password, ...result } = user;
      return result;
    } catch (error) {
      throw new Error('cannot register this user please contact administrator')
    }
  }
}
