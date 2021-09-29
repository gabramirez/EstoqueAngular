import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstoquesComponent } from './estoques.component';

describe('EstoquesComponent', () => {
  let component: EstoquesComponent;
  let fixture: ComponentFixture<EstoquesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EstoquesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EstoquesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
