import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SynopsosComponent } from './synopsos.component';

describe('SynopsosComponent', () => {
  let component: SynopsosComponent;
  let fixture: ComponentFixture<SynopsosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SynopsosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SynopsosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
