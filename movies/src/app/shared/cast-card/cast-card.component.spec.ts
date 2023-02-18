import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CastCardComponent } from './cast-card.component';

describe('CastCardComponent', () => {
  let component: CastCardComponent;
  let fixture: ComponentFixture<CastCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CastCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CastCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
