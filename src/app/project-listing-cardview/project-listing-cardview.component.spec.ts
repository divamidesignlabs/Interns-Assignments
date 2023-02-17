import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectListingCardviewComponent } from './project-listing-cardview.component';

describe('ProjectListingCardviewComponent', () => {
  let component: ProjectListingCardviewComponent;
  let fixture: ComponentFixture<ProjectListingCardviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectListingCardviewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectListingCardviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
