import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LcdsComponent } from './lcds.component';

describe('LcdsComponent', () => {
  let component: LcdsComponent;
  let fixture: ComponentFixture<LcdsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LcdsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LcdsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
