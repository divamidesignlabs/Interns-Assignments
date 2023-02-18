import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChordComponentComponent } from './chord-component.component';

describe('ChordComponentComponent', () => {
  let component: ChordComponentComponent;
  let fixture: ComponentFixture<ChordComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChordComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChordComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
