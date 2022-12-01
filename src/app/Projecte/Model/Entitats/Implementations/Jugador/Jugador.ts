import { CartaMemory } from "../Carta/CartaMemory";
import { IJugador } from "../../Interfaces/Jugador/IJugador";

export class Jugador implements IJugador {
  nom: string;
  cartes: CartaMemory[] = new Array<CartaMemory>();

  constructor(nom: string) {
    this.nom = nom;
  }
  agafarCarta(carta: CartaMemory): void {
    this.cartes.push(carta);
  }
}
