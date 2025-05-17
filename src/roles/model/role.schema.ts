import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { AbstractDocument } from 'src/database/abstract.schema';

@Schema({ timestamps: true, collection: 'Roles' })
export class RolesDocuments extends AbstractDocument {
  @Prop()
  rolesId: string;

  @Prop()
  userType: string;
}

export const RoleSchema = SchemaFactory.createForClass(RolesDocuments);
