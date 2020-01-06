import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LcdsListComponent } from './lcds-list.component';

describe('LcdsListComponent', () => {
  let component: LcdsListComponent;
  let fixture: ComponentFixture<LcdsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LcdsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LcdsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
