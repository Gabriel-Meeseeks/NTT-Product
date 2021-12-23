import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroComponent } from './cadastro/cadastro.component';
import { DeleteProductComponent } from './delete-product/delete-product.component';
import { EditProductComponent } from './edit-product/edit-product.component';
import { InicioComponent } from './inicio/inicio.component';
import { NewProductComponent } from './new-product/new-product.component';

const routes: Routes = [
  {
    path: '',
    component: InicioComponent
  },
  {
    path: 'cadastro',
    component: CadastroComponent
  },
  {
    path: 'novo-produto',
    component: NewProductComponent
  },
  {
    path: 'edit-product/:params',
    component: EditProductComponent
  },
  {
    path: 'delete-product/:params',
    component: DeleteProductComponent
  }
]

@NgModule({
  imports: [ RouterModule.forRoot(routes)]
})
export class AppRoutingModule { }
