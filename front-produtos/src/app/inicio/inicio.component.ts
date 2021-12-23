import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.styleMenu()
  }

  styleMenu(){
    const styleMenu = sessionStorage.getItem('styleMenu')
    if(!styleMenu || styleMenu === 'false'){
      sessionStorage.setItem('styleMenu', 'true')
    }
  }

}
