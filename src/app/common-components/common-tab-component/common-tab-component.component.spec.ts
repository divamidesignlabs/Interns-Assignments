import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommonTabComponentComponent } from './common-tab-component.component';

describe('CommonTabComponentComponent', () => {
  let component: CommonTabComponentComponent;
  let fixture: ComponentFixture<CommonTabComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommonTabComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CommonTabComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
