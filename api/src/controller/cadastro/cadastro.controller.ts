/* eslint-disable prettier/prettier */
import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { CadastroService } from 'src/service/cadastro/cadastro.service';

@Controller('cadastro')
export class CadastroController {
  constructor(private cadastroService: CadastroService) { }

  @Get('index')
  index() {
    return this.cadastroService.index();
  }

  @Post('store')
  store(@Body() body) {
    return this.cadastroService.store(body);
  }

  @Get('show/:id')
  show(@Param() param) {
    return this.cadastroService.show(param.id);
  }

  @Put('update/:id')
  update(@Body() body, @Param() param) {
    return this.cadastroService.update(body, param.id);
  }

  @Delete('delete/:id')
  delete(@Param() param) {
    return this.cadastroService.delete(param.id)
  }
}
