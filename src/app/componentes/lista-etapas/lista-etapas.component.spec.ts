import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaEtapasComponent } from './lista-etapas.component';

describe('ListaEtapasComponent', () => {
  let component: ListaEtapasComponent;
  let fixture: ComponentFixture<ListaEtapasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaEtapasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaEtapasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
