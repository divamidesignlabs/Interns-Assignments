import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectListingComponentComponent } from './project-listing-component.component';

describe('ProjectListingComponentComponent', () => {
  let component: ProjectListingComponentComponent;
  let fixture: ComponentFixture<ProjectListingComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectListingComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectListingComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
