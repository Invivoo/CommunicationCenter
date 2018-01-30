import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserVivCurveComponent } from './user-viv-curve.component';

describe('UserVivCurveComponent', () => {
  let component: UserVivCurveComponent;
  let fixture: ComponentFixture<UserVivCurveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserVivCurveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserVivCurveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
