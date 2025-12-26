import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCarsAddComponent } from './admin-cars-add-component';

describe('AdminCarsAddComponent', () => {
  let component: AdminCarsAddComponent;
  let fixture: ComponentFixture<AdminCarsAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminCarsAddComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminCarsAddComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
