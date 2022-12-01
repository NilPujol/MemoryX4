import { ICartaMemory } from "../../Interfaces/Carta/ICartaMemory";
import { Carta } from "./Carta";

export class CartaMemory extends Carta implements ICartaMemory {
  visible: boolean;
  fixed: boolean;

  constructor(num: number, pal: string, img: string) {
    super(num, pal, img);
    this.visible = false;
    this.fixed = false;
  }
  girar(): void {
    this.visible = true;
  }
}
