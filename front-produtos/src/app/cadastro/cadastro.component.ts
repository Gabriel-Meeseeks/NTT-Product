import { Component, OnInit } from '@angular/core';
import { CadastroService } from '../app.service';


@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss']
})

export class CadastroComponent implements OnInit {
  cadastro: Array<any> = new Array();
  cadastroArray = []
  displayedColumns: string[] = ['id', 'name', 'value', 'acoes'];

  constructor(
    private cadastroService: CadastroService
  ) { }

  ngOnInit(): void {
    this.listAll();
    this.load()
    this.styleMenu()
  }

  styleMenu(){
    const styleMenu = sessionStorage.getItem('styleMenu')
    if(styleMenu === 'true'){
      sessionStorage.setItem('styleMenu', 'false')
    }
  }

  load() {
    const HAS_RELOAD = 'hasReload';
    const hasReload = sessionStorage.getItem(HAS_RELOAD);
    if(hasReload === 'false' || !hasReload) {
      sessionStorage.setItem(HAS_RELOAD, 'true')
    }
  }

  listAll() {
    let cont = 0;
    let arrayObjeto: Array<any> = [];
    this.cadastroService.listAll().subscribe( list => {
      this.cadastro = list
      this.cadastro.forEach(res => {
        cont++
        arrayObjeto.push({
          cont: cont,
          name: res.name,
          value: Math.max(res.value).toFixed(2).split('.').toString(), // Deixa o valor com duas casas decimais e troca o ponto por virgula
          id: res._id
        })
        this.cadastro = arrayObjeto
      })
    })
  }
}
