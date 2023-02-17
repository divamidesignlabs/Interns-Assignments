import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectCreationAcknowledgementComponent } from './project-creation-acknowledgement.component';

describe('ProjectCreationAcknowledgementComponent', () => {
  let component: ProjectCreationAcknowledgementComponent;
  let fixture: ComponentFixture<ProjectCreationAcknowledgementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectCreationAcknowledgementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectCreationAcknowledgementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
