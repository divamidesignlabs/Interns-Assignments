import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayDataInTableComponent } from './display-data-in-table.component';

describe('DisplayDataInTableComponent', () => {
  let component: DisplayDataInTableComponent;
  let fixture: ComponentFixture<DisplayDataInTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplayDataInTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DisplayDataInTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
