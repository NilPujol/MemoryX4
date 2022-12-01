import { IBarallaMemory } from "../../Interfaces/Baralla/IBarallaMemory";
import { ICartaMemory } from "../../Interfaces/Carta/ICartaMemory";
import { CartaMemory } from "../Carta/CartaMemory";

export class BarallaMemory implements IBarallaMemory {
  row1: Array<CartaMemory> = new Array<CartaMemory>;
  row2: Array<CartaMemory> = new Array<CartaMemory>;
  row3: Array<CartaMemory> = new Array<CartaMemory>;
  row4: Array<CartaMemory> = new Array<CartaMemory>;
  cartes: Array<CartaMemory> = new Array<CartaMemory>;
  files: Array<Array<CartaMemory>> = [this.row1, this.row2, this.row3, this.row4]
  cartesSeleccionades: Array<CartaMemory> = new Array<CartaMemory>;
  errors: number;
  temps: number;


  constructor() {
    this.errors = 0;
    this.temps = 10
    this.generar();
    this.barrejar();
    this.mostrarInicial();
  }
  generar(): void {
    let pals: Array<string> = ["1", "2", "3", "4"];
    let imatges: Array<string> = ["AP.png", "AC.png", "AD.png", "AH.png"];
    for (let j = 0; j < pals.length; j++) {
      for (let i = 1; i <= 12; i++) {
        if (i <= 4) {
          this.files[j].push(new CartaMemory(i, pals[j], imatges[i - 1]));
        }
      }
    }
  }
  mostrarInicial() {
    this.files.forEach(fila => {
      fila.forEach(carta => {
        carta.visible = true;
      });
    });
    let timer = setInterval(this.timer, 1000, this);
    setTimeout(this.amagarInicial, 10000, this.files, timer);
  }
  amagarInicial(files: Array<Array<CartaMemory>>, timer: NodeJS.Timer) {
    files.forEach(fila => {
      fila.forEach(carta => {
        carta.visible = false;
      });
    });
    clearInterval(timer);
  }
  eliminar(carta: CartaMemory) {
    //this.cartes.filter(c => carta.num != c.num || carta.pal != c.pal);
    this.cartes = this.cartes.filter(c => c != carta);
  }
  barrejar(): void {
    this.files.forEach(fila => {
      for (let i = fila.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [fila[i], fila[j]] = [fila[j], fila[i]];
      }
    });
  }
  comprovarCartes() {
    this.cartesSeleccionades = new Array<CartaMemory>;
    this.files.forEach(fila => {
      fila.forEach(carta => {
        if (carta.visible && !carta.fixed) {
          this.cartesSeleccionades.push(carta);
        }
      });
    });
    if (this.cartesSeleccionades.length < 4) {
      return;
    }
    if (this.cartesSeleccionades[1].num == this.cartesSeleccionades[0].num && this.cartesSeleccionades[1].num == this.cartesSeleccionades[2].num && this.cartesSeleccionades[1].num == this.cartesSeleccionades[3].num) {
      this.cartesSeleccionades.forEach(carta => {
        carta.fixed = true;
      });
    } else {
      this.temps = 10;
      let timer = setInterval(this.timer, 1000, this);
      setTimeout(this.resetejar, 10000, this.cartesSeleccionades, timer);
      this.errors++;
    }

  }
  resetejar(cartesSeleccionades: Array<CartaMemory>, timer: NodeJS.Timer) {
    cartesSeleccionades.forEach(carta => {
      carta.visible = false;
    });
    clearInterval(timer);
  }
  timer(baralla: BarallaMemory) {
    baralla.temps--;
  }

}
