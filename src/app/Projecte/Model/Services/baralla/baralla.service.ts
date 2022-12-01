import { Injectable } from '@angular/core';
import { BarallaMemory } from "../../Entitats/Implementations/Baralla/BarallaMemory";

@Injectable({
  providedIn: 'root'
})
export class BarallaService {
  baralla: BarallaMemory = new BarallaMemory();
  constructor() {

  }
  getBaralla(): BarallaMemory {
    return this.baralla;
  }
}
