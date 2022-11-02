import { Injectable } from '@angular/core';
import { Waste } from '../interfaces/waste';

@Injectable({
  providedIn: 'root'
})
export class PutWasteService {

  wasteList: Waste[] = []

  putWaste(waste:Waste) {
    this.wasteList.push(waste)
  }

  getWaste() {
    return this.wasteList
  }
}
