import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectCreatingComponentComponent } from './project-creating-component.component';

describe('ProjectCreatingComponentComponent', () => {
  let component: ProjectCreatingComponentComponent;
  let fixture: ComponentFixture<ProjectCreatingComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectCreatingComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectCreatingComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
