import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToastCommonComponentComponent } from './toast-common-component.component';

describe('ToastCommonComponentComponent', () => {
  let component: ToastCommonComponentComponent;
  let fixture: ComponentFixture<ToastCommonComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToastCommonComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ToastCommonComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
