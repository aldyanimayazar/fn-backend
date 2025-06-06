import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { AbstractDocument } from "src/database/abstract.schema";
import { ActivationStatus, VerifiedStatus } from "../enum/activation-status.enum";
import { IRoles } from "src/roles/interface/roles.interface";
import { RoleSchema } from "src/roles/model/role.schema";
import { v4 as uuidv4 } from 'uuid';
import * as mongoose from 'mongoose';

@Schema({ timestamps: true, collection: 'users' })
export class UserDocuments extends AbstractDocument {

    @Prop({ type: String, default: uuidv4 })
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

    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Branch', required: false })
    branch?: mongoose.Types.ObjectId;

}

export const UserSchema = SchemaFactory.createForClass(UserDocuments);
