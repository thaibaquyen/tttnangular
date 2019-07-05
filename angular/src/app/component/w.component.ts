import { Component } from '@angular/core';

@Component({
  selector: 'app-w',
  template: '<h2>hello anh em</h2>',
  styles: [`
    h2{
      color:blue;
      margin:10px 10px 10px 10px;
    }
  `]
})
export class WComponent {
  hl = 'hello';
}
