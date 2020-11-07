import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CDiscussionAttach1Component } from './c-discussion-attach1.component';


describe('CDiscussionAttachComponent', () => {
  let component: CDiscussionAttach1Component;
  let fixture: ComponentFixture<CDiscussionAttach1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CDiscussionAttach1Component]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CDiscussionAttach1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
