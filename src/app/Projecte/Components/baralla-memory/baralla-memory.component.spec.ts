import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarallaMemoryComponent } from './baralla-memory.component';

describe('BarallaMemoryComponent', () => {
  let component: BarallaMemoryComponent;
  let fixture: ComponentFixture<BarallaMemoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BarallaMemoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BarallaMemoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
