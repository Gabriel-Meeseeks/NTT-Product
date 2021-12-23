import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  constructor() { }
  ngOnInit(): void {
    this.titleChange()
  }

  titleChange() {
    let link = document.URL
    link = link.split('http://localhost:4200')[1]
    return link
  }
}
