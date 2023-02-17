import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieTagComponent } from './movie-tag.component';

describe('MovieTagComponent', () => {
  let component: MovieTagComponent;
  let fixture: ComponentFixture<MovieTagComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MovieTagComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MovieTagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
