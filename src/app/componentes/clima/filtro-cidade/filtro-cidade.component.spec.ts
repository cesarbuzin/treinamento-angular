import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FiltroCidadeComponent } from './filtro-cidade.component';

describe('FiltroCidadeComponent', () => {
  let component: FiltroCidadeComponent;
  let fixture: ComponentFixture<FiltroCidadeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FiltroCidadeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FiltroCidadeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
