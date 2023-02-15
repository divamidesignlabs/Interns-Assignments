import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentContainerComponent } from './component-container.component';

describe('ComponentContainerComponent', () => {
  let component: ComponentContainerComponent;
  let fixture: ComponentFixture<ComponentContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComponentContainerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComponentContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
