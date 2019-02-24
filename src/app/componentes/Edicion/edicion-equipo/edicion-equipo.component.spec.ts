import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EdicionEquipoComponent } from './edicion-equipo.component';

describe('EdicionEquipoComponent', () => {
  let component: EdicionEquipoComponent;
  let fixture: ComponentFixture<EdicionEquipoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EdicionEquipoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EdicionEquipoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
