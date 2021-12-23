import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  // style: any;
  // link: any;

  constructor() { }

  ngOnInit(): void {
    // this.menuActive()
    // console.log(this.link)
  }

  // getValueStyle() {
  //   this.style = sessionStorage.getItem('styleMenu');
  //   let link = document.URL
  //   this.link = link.split('http://localhost:4200')[1]
  //   // const aux = this.menuActive()
  //   // console.log(aux)
  //   // location.reload()
  // }

  // menuActive(){
  //   let link = document.URL
  //   this.link = link.split('http://localhost:4200')[1]
  //   return this.link
  // }
}
