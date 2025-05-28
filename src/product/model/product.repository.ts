import { AbstractRepository } from "src/database/abstract.repository";
import { ProductDocuments } from "./product.schema";
import { Logger } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model, Types } from "mongoose";
import { nanoid } from 'nanoid';
import { CreateProductDto } from "../dto/create-product.dto";

export class ProductRepository extends AbstractRepository<ProductDocuments> {
    protected readonly logger: Logger = new Logger(ProductRepository.name);
    constructor(
        @InjectModel(ProductDocuments.name) productModel: Model<ProductDocuments>,
    ){
        super(productModel)
    }

async create(dto: CreateProductDto) {
  const created = new this.model({
    ...dto,
    productId: nanoid(), // move logic here
    _id: new Types.ObjectId(),
  });

  return await created.save();
}

}