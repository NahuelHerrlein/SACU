import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetallesEtapaComponent } from './detalles-etapa.component';

describe('DetallesEtapaComponent', () => {
  let component: DetallesEtapaComponent;
  let fixture: ComponentFixture<DetallesEtapaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetallesEtapaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetallesEtapaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
