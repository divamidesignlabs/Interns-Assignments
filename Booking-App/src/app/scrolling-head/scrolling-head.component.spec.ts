import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScrollingHeadComponent } from './scrolling-head.component';

describe('ScrollingHeadComponent', () => {
  let component: ScrollingHeadComponent;
  let fixture: ComponentFixture<ScrollingHeadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScrollingHeadComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScrollingHeadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
