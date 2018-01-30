import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserVivRequestComponent } from './user-viv-request.component';

describe('UserVivRequestComponent', () => {
  let component: UserVivRequestComponent;
  let fixture: ComponentFixture<UserVivRequestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserVivRequestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserVivRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
