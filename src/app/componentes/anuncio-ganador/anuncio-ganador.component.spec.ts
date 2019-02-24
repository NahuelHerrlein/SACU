import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnuncioGanadorComponent } from './anuncio-ganador.component';

describe('AnuncioGanadorComponent', () => {
  let component: AnuncioGanadorComponent;
  let fixture: ComponentFixture<AnuncioGanadorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnuncioGanadorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnuncioGanadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
