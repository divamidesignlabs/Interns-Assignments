import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopUpcomponentComponent } from './pop-upcomponent.component';

describe('PopUpcomponentComponent', () => {
  let component: PopUpcomponentComponent;
  let fixture: ComponentFixture<PopUpcomponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PopUpcomponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PopUpcomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
