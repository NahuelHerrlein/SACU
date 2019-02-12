import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetallesCampeonatoComponent } from './detalles-campeonato.component';

describe('DetallesCampeonatoComponent', () => {
  let component: DetallesCampeonatoComponent;
  let fixture: ComponentFixture<DetallesCampeonatoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetallesCampeonatoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetallesCampeonatoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
