import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogVoucherComponent } from './dialog-voucher.component';

describe('DialogVoucherComponent', () => {
  let component: DialogVoucherComponent;
  let fixture: ComponentFixture<DialogVoucherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogVoucherComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogVoucherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
