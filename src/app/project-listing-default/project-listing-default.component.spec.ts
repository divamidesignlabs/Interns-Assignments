import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectListingDefaultComponent } from './project-listing-default.component';

describe('ProjectListingDefaultComponent', () => {
  let component: ProjectListingDefaultComponent;
  let fixture: ComponentFixture<ProjectListingDefaultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectListingDefaultComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectListingDefaultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
