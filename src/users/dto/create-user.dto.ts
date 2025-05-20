import { IsEmail, IsEnum, IsPhoneNumber, IsString } from "class-validator";
import { UserType } from "src/roles/enum/roles.enum";
import { IRoles } from "src/roles/interface/roles.interface";
import { ActivationStatus, VerifiedStatus } from "../enum/activation-status.enum";

export class CreateUserDto {
    @IsString()
    userId:string;

    @IsEmail()
    email:string;

    @IsString()
    password:string;

    @IsString()
    phoneNumber:string;

    @IsString()
    firstName:string;

    @IsString()
    lastName:string;

    @IsString()
    address:string;

    @IsString()
    rolesId:IRoles;

    @IsEnum({type: ActivationStatus})
    activationStatus:ActivationStatus;

    @IsEnum({type: VerifiedStatus})
    verifiedStatus:VerifiedStatus;
}
