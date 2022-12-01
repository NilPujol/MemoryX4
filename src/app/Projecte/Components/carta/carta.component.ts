import { APP_BASE_HREF } from '@angular/common';
import { Component, Inject, Input, OnInit } from '@angular/core';
import { CartaMemory } from '../../Model/Entitats/Implementations/Carta/CartaMemory';
import { BarallaService } from '../../Model/Services/baralla/baralla.service';
import { JugadorService } from '../../Model/Services/Jugador/jugador.service';

@Component({
  selector: 'app-carta',
  templateUrl: './carta.component.html',
  styleUrls: ['./carta.component.css']
})
export class CartaComponent implements OnInit {
  @Input() carta!: CartaMemory;
  ruta!: string;
  constructor(private barallaService: BarallaService, private jugadorService: JugadorService, @Inject(APP_BASE_HREF) private baseHref: string) { }

  ngOnInit(): void {
    this.ruta = this.baseHref;
  }
  agafar(carta: CartaMemory) {
    let favailabe = true;
    this.barallaService.getBaralla().files[Number(carta.pal) - 1].forEach(cartaf => {
      if (cartaf.visible && !cartaf.fixed) {
        favailabe = false;
      }
    });
    if (favailabe) {
      carta.girar();
      this.barallaService.getBaralla().comprovarCartes();
    }


  }

}
