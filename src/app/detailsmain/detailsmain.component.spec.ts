import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsmainComponent } from './detailsmain.component';

describe('DetailsmainComponent', () => {
  let component: DetailsmainComponent;
  let fixture: ComponentFixture<DetailsmainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsmainComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailsmainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
