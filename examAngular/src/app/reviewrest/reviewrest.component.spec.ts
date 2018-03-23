import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewrestComponent } from './reviewrest.component';

describe('ReviewrestComponent', () => {
  let component: ReviewrestComponent;
  let fixture: ComponentFixture<ReviewrestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReviewrestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReviewrestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
