import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingmainComponent } from './bookingmain.component';

describe('BookingmainComponent', () => {
  let component: BookingmainComponent;
  let fixture: ComponentFixture<BookingmainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookingmainComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookingmainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
