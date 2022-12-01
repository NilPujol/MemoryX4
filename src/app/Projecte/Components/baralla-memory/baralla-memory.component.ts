import { Component, OnInit } from '@angular/core';
import { BarallaMemory } from '../../Model/Entitats/Implementations/Baralla/BarallaMemory';
import { BarallaService } from '../../Model/Services/baralla/baralla.service';

@Component({
  selector: 'app-baralla-memory',
  templateUrl: './baralla-memory.component.html',
  styleUrls: ['./baralla-memory.component.css']
})
export class BarallaMemoryComponent implements OnInit {


  constructor(private barallaService: BarallaService) { }

  ngOnInit(): void {
  }

  public getBaralla(): BarallaMemory {
    return this.barallaService.getBaralla();
  }

}
