import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommonForProjectListComponent } from './common-for-project-list.component';

describe('CommonForProjectListComponent', () => {
  let component: CommonForProjectListComponent;
  let fixture: ComponentFixture<CommonForProjectListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommonForProjectListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CommonForProjectListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
