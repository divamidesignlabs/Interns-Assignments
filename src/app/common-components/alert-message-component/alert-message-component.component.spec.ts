import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlertMessageComponentComponent } from './alert-message-component.component';

describe('AlertMessageComponentComponent', () => {
  let component: AlertMessageComponentComponent;
  let fixture: ComponentFixture<AlertMessageComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlertMessageComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlertMessageComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
