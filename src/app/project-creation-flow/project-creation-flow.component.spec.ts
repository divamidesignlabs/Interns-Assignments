import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectCreationFlowComponent } from './project-creation-flow.component';

describe('ProjectCreationFlowComponent', () => {
  let component: ProjectCreationFlowComponent;
  let fixture: ComponentFixture<ProjectCreationFlowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectCreationFlowComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectCreationFlowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
