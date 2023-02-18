import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilerComponentComponent } from './filer-component.component';

describe('FilerComponentComponent', () => {
  let component: FilerComponentComponent;
  let fixture: ComponentFixture<FilerComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilerComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FilerComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
