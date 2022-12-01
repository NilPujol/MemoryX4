import { ICartaMemory } from "../Carta/ICartaMemory";

export interface IJugador {
  nom: string;
  cartes: ICartaMemory[];
  agafarCarta(carta: ICartaMemory): void;
}
