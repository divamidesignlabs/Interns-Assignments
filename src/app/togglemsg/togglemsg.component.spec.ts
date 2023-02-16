import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TogglemsgComponent } from './togglemsg.component';

describe('TogglemsgComponent', () => {
  let component: TogglemsgComponent;
  let fixture: ComponentFixture<TogglemsgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TogglemsgComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TogglemsgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
