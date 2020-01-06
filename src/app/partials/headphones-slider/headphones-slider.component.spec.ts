import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadphonesSliderComponent } from './headphones-slider.component';

describe('HeadphonesSliderComponent', () => {
  let component: HeadphonesSliderComponent;
  let fixture: ComponentFixture<HeadphonesSliderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeadphonesSliderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeadphonesSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
