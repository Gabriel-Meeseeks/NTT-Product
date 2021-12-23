import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { CadastroService } from '../app.service';


@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.scss']
})
export class NewProductComponent implements OnInit {

  nome = null
  preco = null
  botao = 0

  constructor(
    private cadastroService: CadastroService,
    private _snackBar: MatSnackBar,
    private _route: Router
  ) { }

  ngOnInit(): void {
    this.buttonValidation()
    this.load()
  }

  load() {
    const HAS_RELOAD = 'hasReload';
    const hasReload = sessionStorage.getItem(HAS_RELOAD);
    if(hasReload === 'true') {
      sessionStorage.setItem(HAS_RELOAD, 'false')
      location.reload()
    }
  }

  sendByEnter(key: any){
    if(key.key === 'Enter' && !this.buttonValidation()){
      this.cadastrar()
      this._route.navigate(['/cadastro'])
    }
  }

  buttonValidation() {
    if(this.nome === '' || this.preco === null){
      return true
    }else {
      return false
    }
  }

  openSnackBar() {
    this._snackBar.open('Produto Criado!', '', {
      duration: 1500,
      verticalPosition: "top",
      horizontalPosition: "right",
      panelClass: ['snackBarColor']

    })
  }

  cadastrar() {
    if (this.nome !== null && this.preco !== null) {
      const value = Math.max(this.preco).toFixed(2)
      this.cadastroService.create({
        name: this.nome,
        value: value
      })
      this.botao = 1
      this.openSnackBar()
    }
  }
}
