import { Module } from '@nestjs/common';
import { ProductService } from './product.service';
import { ProductController } from './product.controller';
import { ProductRepository } from './model/product.repository';
import { DatabaseModule } from 'src/database/database.module';
import { RolesModule } from 'src/roles/roles.module';
import { ProductDocuments, ProductSchema } from './model/product.schema';

@Module({
  imports: [
      DatabaseModule.forFeature([
        { name: ProductDocuments.name, schema: ProductSchema },
      ]),
      RolesModule,
    ],
  controllers: [ProductController],
  providers: [ProductService,ProductRepository],
})
export class ProductModule {}
