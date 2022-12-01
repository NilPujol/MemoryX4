import { APP_BASE_HREF } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BarallaMemoryComponent } from './Projecte/Components/baralla-memory/baralla-memory.component';
import { CartaComponent } from './Projecte/Components/carta/carta.component';
import { JugadorComponent } from './Projecte/Components/jugador/jugador.component';
import { CartaMemory } from './Projecte/Model/Entitats/Implementations/Carta/CartaMemory';

@NgModule({
  declarations: [
    AppComponent,
    BarallaMemoryComponent,
    JugadorComponent,
    CartaComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [{ provide: APP_BASE_HREF, useValue: '/' }],
  bootstrap: [AppComponent]
})
export class AppModule { }
