import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Product, ProductDocument } from '../../models/produto.schema';

@Injectable()
export class CadastroService {

  constructor(@InjectModel(Product.name) private productModel: Model<ProductDocument>) { }

  async index(): Promise<Product[]> {
    return this.productModel.find().exec()
  }

  async store(body): Promise<Product> {
    const createProduct = new this.productModel(body);
    return createProduct.save()
  }

  show(id): Promise<Product> {
    return this.productModel.findById(id).exec()
  }

  async update(body, id): Promise<Product> {
    return this.productModel.findByIdAndUpdate(id, body)
  }

  delete(id) {
    return this.productModel.findByIdAndRemove(id)
  }
}
