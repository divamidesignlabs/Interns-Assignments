import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganizationalAccountComponent } from './organizational-account.component';

describe('OrganizationalAccountComponent', () => {
  let component: OrganizationalAccountComponent;
  let fixture: ComponentFixture<OrganizationalAccountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrganizationalAccountComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrganizationalAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
