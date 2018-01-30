import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserVivComponent } from './user-viv.component';

describe('UserVivComponent', () => {
  let component: UserVivComponent;
  let fixture: ComponentFixture<UserVivComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserVivComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserVivComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
