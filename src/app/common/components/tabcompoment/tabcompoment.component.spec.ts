import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabcompomentComponent } from './tabcompoment.component';

describe('TabcompomentComponent', () => {
  let component: TabcompomentComponent;
  let fixture: ComponentFixture<TabcompomentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TabcompomentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TabcompomentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
