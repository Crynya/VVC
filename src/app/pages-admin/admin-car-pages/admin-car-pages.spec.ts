import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCarPages } from './admin-car-pages';

describe('AdminCarPages', () => {
  let component: AdminCarPages;
  let fixture: ComponentFixture<AdminCarPages>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminCarPages]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminCarPages);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
