import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LaptopsSliderComponent } from './laptops-slider.component';

describe('LaptopsSliderComponent', () => {
  let component: LaptopsSliderComponent;
  let fixture: ComponentFixture<LaptopsSliderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LaptopsSliderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LaptopsSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
