import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { CadastroService } from './../app.service';
import { ModelCadastro } from './../cadastro/modelcadastro';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.scss']
})
export class EditProductComponent implements OnInit {
  id: string;
  precoUpdate: any;
  nameUpdate: any;
  product: any = null;

  constructor(
    private route: ActivatedRoute,
    private cadastroService: CadastroService,
    private _snackBar: MatSnackBar
  ) {
    this.id = this.route.snapshot.params['params'];
  }

  ngOnInit(): void {
    this.showProduct()
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

  async showProduct() {
    await this.cadastroService.show(this.id).then(list => {
      this.product = list
    })
  }

  validationValues(name1: string, name2: string, value1: number, value2: string) {
    let aux = value2.split("R$ ", 2)
    const transformValue = Math.max(value1).toFixed(2).split('.').toString()
    if(transformValue === aux[1] && name1 === name2) {
      return true
    }else{
      return false
    }

  }

  getValues(event?: any) {
    const name = event.target.value
  }

  openSnackBar() {
    this._snackBar.open('Alterado com sucesso!', '', {
      duration: 1500,
      verticalPosition: "top",
      horizontalPosition: "right",
      panelClass: ['snackBarColor']

    })
  }

  update(name: string, value: string) {
    const valueTransform = value.split('R$ ')
    const valueTransform2 = valueTransform[1].split(',')
    let body: ModelCadastro
    this.nameUpdate = name
    this.precoUpdate = parseFloat(valueTransform2[0] + '.' + valueTransform2[1])

    if(this.nameUpdate !== null && this.precoUpdate !== null){
      body = {
        name: this.nameUpdate,
        value: this.precoUpdate
      }
      this.openSnackBar()
      this.cadastroService.update(this.id, body)
    }
  }
}
