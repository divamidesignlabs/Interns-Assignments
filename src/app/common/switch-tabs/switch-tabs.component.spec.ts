import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SwitchTabsComponent } from './switch-tabs.component';

describe('SwitchTabsComponent', () => {
  let component: SwitchTabsComponent;
  let fixture: ComponentFixture<SwitchTabsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SwitchTabsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SwitchTabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
