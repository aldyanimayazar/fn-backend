import { IsOptional } from "class-validator";

export class CreateMediaDto {

    @IsOptional()
    uploadedBy?: string;

    @IsOptional()
    usedIn?: string;
}
