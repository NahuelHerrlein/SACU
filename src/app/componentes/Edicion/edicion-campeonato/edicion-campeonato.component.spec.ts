import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EdicionCampeonatoComponent } from './edicion-campeonato.component';

describe('EdicionCampeonatoComponent', () => {
  let component: EdicionCampeonatoComponent;
  let fixture: ComponentFixture<EdicionCampeonatoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EdicionCampeonatoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EdicionCampeonatoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
