import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LcdsSliderComponent } from './lcds-slider.component';

describe('LcdsSliderComponent', () => {
  let component: LcdsSliderComponent;
  let fixture: ComponentFixture<LcdsSliderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LcdsSliderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LcdsSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
