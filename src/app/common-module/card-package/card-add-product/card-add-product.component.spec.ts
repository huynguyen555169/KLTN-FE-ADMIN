import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardAddProductComponent } from './card-add-product.component';

describe('CardAddProductComponent', () => {
  let component: CardAddProductComponent;
  let fixture: ComponentFixture<CardAddProductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardAddProductComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardAddProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
