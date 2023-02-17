import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistertrationFormComponent } from './registertration-form.component';

describe('RegistertrationFormComponent', () => {
  let component: RegistertrationFormComponent;
  let fixture: ComponentFixture<RegistertrationFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistertrationFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistertrationFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
