import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EdicionJugadorComponent } from './edicion-jugador.component';

describe('EdicionJugadorComponent', () => {
  let component: EdicionJugadorComponent;
  let fixture: ComponentFixture<EdicionJugadorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EdicionJugadorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EdicionJugadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
