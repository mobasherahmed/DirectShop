import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MobilesSliderComponent } from './mobiles-slider.component';

describe('MobilesSliderComponent', () => {
  let component: MobilesSliderComponent;
  let fixture: ComponentFixture<MobilesSliderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MobilesSliderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MobilesSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
