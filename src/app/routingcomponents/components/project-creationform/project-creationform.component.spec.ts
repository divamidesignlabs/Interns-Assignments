import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectCreationformComponent } from './project-creationform.component';

describe('ProjectCreationformComponent', () => {
  let component: ProjectCreationformComponent;
  let fixture: ComponentFixture<ProjectCreationformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectCreationformComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectCreationformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
