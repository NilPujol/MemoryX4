import { IBaralla } from "../../Interfaces/Baralla/IBaralla";
import { ICarta } from "../../Interfaces/Carta/ICarta";
import { Carta } from "../Carta/Carta";

export class Baralla implements IBaralla<ICarta> {
  cartes!: Array<ICarta>;
  constructor() {
    this.generar();
  }
  generar(): void {
    let pals: Array<string> = ["Rombes", "Cors", "Trèvols", "Piques"];
    let imatges: Array<string> = ["♦", "♥", "♣", "♠"];
    for (let j = 0; j < pals.length; j++) {
      for (let i = 1; i <= 12; i++) {
        this.cartes.push(new Carta(i, pals[j], imatges[j]));
      }
    }
  }
  barrejar(): void {
    throw new Error("Method not implemented.");
  }
}
