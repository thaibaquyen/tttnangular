import { Injectable } from '@angular/core';
import { sinhvien } from '../model/sinhvien';
@Injectable({
  providedIn: 'root'
})
export class SinhvienService {
  public sinhvien1: sinhvien[] = [new sinhvien('a', 'ư', 'e'), new sinhvien('ab', 'ưb', 'eb')];
  constructor() { }
  getsinhvien() {
    return this.sinhvien1;
  }
}
