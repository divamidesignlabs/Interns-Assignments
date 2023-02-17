import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectCreationFormComponent } from './project-creation-form.component';

describe('ProjectCreationFormComponent', () => {
  let component: ProjectCreationFormComponent;
  let fixture: ComponentFixture<ProjectCreationFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectCreationFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectCreationFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
