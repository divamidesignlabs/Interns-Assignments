import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JoinedtabsComponent } from './joinedtabs.component';

describe('JoinedtabsComponent', () => {
  let component: JoinedtabsComponent;
  let fixture: ComponentFixture<JoinedtabsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JoinedtabsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JoinedtabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
