import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableClassicComponent } from './table-classic.component';

describe('TableClassicComponent', () => {
  let component: TableClassicComponent;
  let fixture: ComponentFixture<TableClassicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableClassicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableClassicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
