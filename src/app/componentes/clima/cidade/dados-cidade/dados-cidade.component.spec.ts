import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DadosCidadeComponent } from './dados-cidade.component';

describe('DadosCidadeComponent', () => {
  let component: DadosCidadeComponent;
  let fixture: ComponentFixture<DadosCidadeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DadosCidadeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DadosCidadeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
