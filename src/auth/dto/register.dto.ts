import { IsEmail, IsEnum, IsOptional, IsString } from 'class-validator';
import { UserType } from 'src/roles/enum/roles.enum';
import { VerifiedStatus, ActivationStatus } from 'src/users/enum/activation-status.enum';

export class RegisterDto {
  @IsEmail() email: string;
  @IsString() password: string;
  @IsString() phoneNumber: string;
  @IsString() firstName: string;
  @IsString() lastName: string;
  @IsString() address: string;
  
  rolesId: string;

  @IsEnum(VerifiedStatus)
  verifiedStatus: VerifiedStatus;

  @IsEnum(ActivationStatus)
  activationStatus: ActivationStatus;
}
