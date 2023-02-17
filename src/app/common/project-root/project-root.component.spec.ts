import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectRootComponent } from './project-root.component';

describe('ProjectRootComponent', () => {
  let component: ProjectRootComponent;
  let fixture: ComponentFixture<ProjectRootComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectRootComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectRootComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
