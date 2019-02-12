import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreacionCampeonatoComponent } from './creacion-campeonato.component';

describe('CreacionCampeonatoComponent', () => {
  let component: CreacionCampeonatoComponent;
  let fixture: ComponentFixture<CreacionCampeonatoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreacionCampeonatoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreacionCampeonatoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
