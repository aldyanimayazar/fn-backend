import { Module } from '@nestjs/common';
import { MediaService } from './media.service';
import { MediaController } from './media.controller';
import { DatabaseModule } from 'src/database/database.module';
import { ProductDocuments } from 'src/product/model/product.schema';
import { RolesModule } from 'src/roles/roles.module';
import { MediaDocuments, MediaSchema } from './model/media.schema';
import { MediaRepository } from './model/media.repository';

@Module({
  imports: [
        DatabaseModule.forFeature([
          { name: MediaDocuments.name, schema: MediaSchema },
        ]),
        RolesModule,
      ],
  controllers: [MediaController],
  providers: [MediaService, MediaRepository],
})
export class MediaModule {}
