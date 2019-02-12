import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreacionJugadorComponent } from './creacion-jugador.component';

describe('CreacionJugadorComponent', () => {
  let component: CreacionJugadorComponent;
  let fixture: ComponentFixture<CreacionJugadorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreacionJugadorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreacionJugadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
