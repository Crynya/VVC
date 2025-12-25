import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminUsersPages } from './admin-users-pages';

describe('AdminUsersPages', () => {
  let component: AdminUsersPages;
  let fixture: ComponentFixture<AdminUsersPages>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminUsersPages]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminUsersPages);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
