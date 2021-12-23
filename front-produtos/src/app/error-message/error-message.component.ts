import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-error-message',
  templateUrl: './error-message.component.html',
  styleUrls: ['./error-message.component.scss']
})
export class ErrorMessageComponent implements OnInit {
  @Input() isErrorCenter: string = ''
  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges() {
    this.isErrorCenter = this.isErrorCenter;
  }
}
