import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-w1',
  templateUrl: './newcomponent.component.html',
  styles: [`
    h2{
      color:blue;
      margin:10px 10px 10px 10px;
    }
  `]
})
export class NewcomponentComponent {
  po = false;
  newr = '' ;
  stt;
  chon = '';
  bien = { color : 'red', fontSize : '50px'};
  arr = ['a', 'b', 'c'];
  xlsk() {
    this.po = !this.po;
    document.getElementById('e').style.color = 'red';
  }
  xlskthem() {
    this.arr.push (this.newr);
    this.newr = '';
  }
  xoa(obj) {
    this.stt = this.arr.indexOf(obj);
    this.arr.splice(this.stt, 1);
  }
  kt(loai) {
    const k1 = this.chon === 'o';
    const k2 = this.chon === 'a' && loai === 'a';
    const k3 = this.chon === 'b' && loai === 'b';
    const k4 = this.chon === 'c' && loai === 'c';
    return k1 || k2 || k3 || k4 ;
  }
}
