import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { AbstractDocument } from 'src/database/abstract.schema';
import { UserType } from '../enum/roles.enum';
import { v4 as uuidv4 } from 'uuid';

@Schema({ timestamps: true, collection: 'Roles' })
export class RolesDocuments extends AbstractDocument {
  
  @Prop({ type: String, default: uuidv4 })
  rolesId: string;

  @Prop({ enum: UserType })
  userType: UserType;
}

export const RoleSchema = SchemaFactory.createForClass(RolesDocuments);
