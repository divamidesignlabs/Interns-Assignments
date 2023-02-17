import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingoffersComponent } from './bookingoffers.component';

describe('BookingoffersComponent', () => {
  let component: BookingoffersComponent;
  let fixture: ComponentFixture<BookingoffersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookingoffersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookingoffersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
