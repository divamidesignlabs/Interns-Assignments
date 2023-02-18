import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingappComponent } from './bookingapp.component';

describe('BookingappComponent', () => {
  let component: BookingappComponent;
  let fixture: ComponentFixture<BookingappComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookingappComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookingappComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
