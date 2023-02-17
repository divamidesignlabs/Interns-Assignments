import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardComponentsComponent } from './card-components.component';

describe('CardComponentsComponent', () => {
  let component: CardComponentsComponent;
  let fixture: ComponentFixture<CardComponentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardComponentsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardComponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
