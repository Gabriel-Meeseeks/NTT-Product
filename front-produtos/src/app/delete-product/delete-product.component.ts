import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { CadastroService } from '../app.service';

@Component({
  selector: 'app-delete-product',
  templateUrl: './delete-product.component.html',
  styleUrls: ['./delete-product.component.scss']
})
export class DeleteProductComponent implements OnInit {

  id: string;
  product: any = null;
  contr = 0

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

  openSnackBar() {
    this._snackBar.open('Produto excluído com sucesso!', '', {
      duration: 1500,
      verticalPosition: "top",
      horizontalPosition: "right",
      panelClass: ['snackBarColor']

    })
  }

  delete() {
    this.openSnackBar()
    return this.cadastroService.delete(this.id)
  }

}
