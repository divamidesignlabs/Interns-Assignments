import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingmainComponent } from './landingmain.component';

describe('LandingmainComponent', () => {
  let component: LandingmainComponent;
  let fixture: ComponentFixture<LandingmainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LandingmainComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LandingmainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
