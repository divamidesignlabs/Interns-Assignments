import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectCardviewComponent } from './project-cardview.component';

describe('ProjectCardviewComponent', () => {
  let component: ProjectCardviewComponent;
  let fixture: ComponentFixture<ProjectCardviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectCardviewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectCardviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
