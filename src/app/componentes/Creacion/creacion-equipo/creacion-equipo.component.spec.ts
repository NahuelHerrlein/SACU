import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreacionEquipoComponent } from './creacion-equipo.component';

describe('CreacionEquipoComponent', () => {
  let component: CreacionEquipoComponent;
  let fixture: ComponentFixture<CreacionEquipoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreacionEquipoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreacionEquipoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
