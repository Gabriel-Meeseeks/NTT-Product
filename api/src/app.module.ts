import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppService } from './app.service';
import { CadastroController } from './controller/cadastro/cadastro.controller';
import { Product, ProductSchema } from './models/produto.schema';
import { CadastroService } from './service/cadastro/cadastro.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Product.name, schema: ProductSchema}]),
    MongooseModule.forRoot('mongodb://localhost:27017/?readPreference=primary&appname=MongoDB%20Compass&ssl=false')
  ],
  controllers: [CadastroController],
  providers: [AppService, CadastroService],
})
export class AppModule { }
