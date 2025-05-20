import { IsEnum } from 'class-validator';
import { UserType } from '../enum/roles.enum';
import { VerifiedStatus } from '../../users/enum/activation-status.enum';

export class CreateRoleDto {
  @IsEnum(UserType)
  userType: UserType;

  rolesId: string;
}
