import { Injectable } from '@angular/core';
import { Jugador } from '../../Entitats/Implementations/Jugador/Jugador';

@Injectable({
  providedIn: 'root'
})
export class JugadorService {
  Jugador: Jugador = new Jugador("Iōnos");
  constructor() { }
  getJugador(): Jugador {
    return this.Jugador;
  }
}
