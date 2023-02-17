import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RunningShowsComponent } from './running-shows.component';

describe('RunningShowsComponent', () => {
  let component: RunningShowsComponent;
  let fixture: ComponentFixture<RunningShowsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RunningShowsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RunningShowsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
