import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { UsersModule } from './users/users.module';
import { RolesModule } from './roles/roles.module';
import { AuthModule } from './auth/auth.module';
import * as Joi from 'joi';
import { DatabaseModule } from './database/database.module';
import { ProductModule } from './product/product.module';
import { CategoryModule } from './category/category.module';
import { MediaModule } from './media/media.module';
import { RaceEventModule } from './race-event/race-event.module';
import { RaceRegistrationModule } from './race-registration/race-registration.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      validationSchema: Joi.object({
        MONGO_URI: Joi.string().required(),
        PORT: Joi.string().required(),
      }),
    }),
    UsersModule,
    RolesModule,
    AuthModule,
    DatabaseModule,
    ProductModule,
    CategoryModule,
    MediaModule,
    RaceEventModule,
    RaceRegistrationModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
