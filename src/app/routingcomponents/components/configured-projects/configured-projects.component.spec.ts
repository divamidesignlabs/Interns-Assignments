import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfiguredProjectsComponent } from './configured-projects.component';

describe('ConfiguredProjectsComponent', () => {
  let component: ConfiguredProjectsComponent;
  let fixture: ComponentFixture<ConfiguredProjectsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfiguredProjectsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConfiguredProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
