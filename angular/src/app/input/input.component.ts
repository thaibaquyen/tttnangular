import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {
  @Input() ten;
  valu = 0;
  xl() {
    this.valu += 1;
  }
  constructor() { }

  ngOnInit() {
  }
  submitform(dlform) {
    console.log(dlform.value);
  }
}
