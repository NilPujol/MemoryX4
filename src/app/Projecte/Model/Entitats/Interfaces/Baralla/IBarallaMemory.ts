import { CartaMemory } from "../../Implementations/Carta/CartaMemory";
import { ICartaMemory } from "../Carta/ICartaMemory";
import { IBaralla } from "./IBaralla";

export interface IBarallaMemory extends IBaralla<ICartaMemory> {
  files: Array<Array<CartaMemory>>;
  errors: number;
  generar(): void;
  eliminar(carta: ICartaMemory): void;
}
