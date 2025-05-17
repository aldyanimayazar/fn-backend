import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { AbstractDocument } from "src/database/abstract.schema";
import { ActivationStatus, VerifiedStatus } from "../enum/activation-status.enum";
import { IRoles } from "src/roles/interface/roles.interface";
import { RoleSchema } from "src/roles/model/role.schema";

@Schema({ timestamps: true, collection: 'users' })
export class UserDocuments extends AbstractDocument {

    @Prop()
    userId: string;

    @Prop()
    email: string;

    @Prop()
    password: string;

    @Prop()
    phoneNumber: string;

    @Prop()
    firstName: string;

    @Prop()
    lastName: string;

    @Prop()
    address: string;

    @Prop({ type: RoleSchema })
    roles: IRoles;

    @Prop()
    activationStatus: ActivationStatus;

    @Prop()
    verifiedStatus: VerifiedStatus;

}

export const UserSchema = SchemaFactory.createForClass(UserDocuments);
