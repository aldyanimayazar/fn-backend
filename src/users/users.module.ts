import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { UsersRepository } from './model/users.repository';
import { DatabaseModule } from 'src/database/database.module';
import { RolesModule } from 'src/roles/roles.module';
import { UserDocuments, UserSchema } from './model/user.schema';

@Module({
  imports: [
    DatabaseModule.forFeature([
      { name: UserDocuments.name, schema: UserSchema },
    ]),
    RolesModule,
  ],
  controllers: [UsersController],
  providers: [UsersService,UsersRepository],
  exports: [UsersService],
})
export class UsersModule {}
