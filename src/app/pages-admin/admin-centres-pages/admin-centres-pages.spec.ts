import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCentresPages } from './admin-centres-pages';

describe('AdminCentresPages', () => {
  let component: AdminCentresPages;
  let fixture: ComponentFixture<AdminCentresPages>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminCentresPages]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminCentresPages);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
