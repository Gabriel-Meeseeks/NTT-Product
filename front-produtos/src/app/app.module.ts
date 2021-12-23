import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { CurrencyMaskModule } from 'ng2-currency-mask';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CadastroService } from './app.service';
import { CadastroComponent } from './cadastro/cadastro.component';
import { DeleteProductComponent } from './delete-product/delete-product.component';
import { EditProductComponent } from './edit-product/edit-product.component';
import { ErrorMessageComponent } from './error-message/error-message.component';
import { InicioComponent } from "./inicio/inicio.component";
import { HeaderComponent } from './navigation/header/header.component';
import { MenuComponent } from './navigation/menu/menu.component';
import { PagesComponent } from './navigation/pages/pages.component';
import { NewProductComponent } from "./new-product/new-product.component";



@NgModule({
  declarations: [
    AppComponent,
    PagesComponent,
    CadastroComponent,
    InicioComponent,
    NewProductComponent,
    HeaderComponent,
    MenuComponent,
    EditProductComponent,
    DeleteProductComponent,
    ErrorMessageComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    BrowserAnimationsModule,
    MatListModule,
    RouterModule,
    MatButtonModule,
    MatTableModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    MatSnackBarModule,
    CurrencyMaskModule
  ],
  exports: [
    MatInputModule
  ],
  providers: [CadastroService, HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }

