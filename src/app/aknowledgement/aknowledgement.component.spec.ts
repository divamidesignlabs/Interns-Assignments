import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AknowledgementComponent } from './aknowledgement.component';

describe('AknowledgementComponent', () => {
  let component: AknowledgementComponent;
  let fixture: ComponentFixture<AknowledgementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AknowledgementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AknowledgementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
