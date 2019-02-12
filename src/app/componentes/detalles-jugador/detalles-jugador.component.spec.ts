import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetallesJugadorComponent } from './detalles-jugador.component';

describe('DetallesJugadorComponent', () => {
  let component: DetallesJugadorComponent;
  let fixture: ComponentFixture<DetallesJugadorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetallesJugadorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetallesJugadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
