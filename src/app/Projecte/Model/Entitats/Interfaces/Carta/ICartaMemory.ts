import { ICarta } from "./ICarta";

export interface ICartaMemory extends ICarta {
  visible: boolean;
  fixed: boolean;
  girar(): void;
}
