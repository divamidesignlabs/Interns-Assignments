import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieFilteringComponent } from './movie-filtering.component';

describe('MovieFilteringComponent', () => {
  let component: MovieFilteringComponent;
  let fixture: ComponentFixture<MovieFilteringComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MovieFilteringComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MovieFilteringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
