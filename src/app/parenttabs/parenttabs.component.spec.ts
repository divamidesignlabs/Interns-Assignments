import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParenttabsComponent } from './parenttabs.component';

describe('ParenttabsComponent', () => {
  let component: ParenttabsComponent;
  let fixture: ComponentFixture<ParenttabsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParenttabsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParenttabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
