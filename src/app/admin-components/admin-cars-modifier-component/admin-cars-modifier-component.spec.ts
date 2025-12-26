import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCarsModifierComponent } from './admin-cars-modifier-component';

describe('AdminCarsModifierComponent', () => {
  let component: AdminCarsModifierComponent;
  let fixture: ComponentFixture<AdminCarsModifierComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminCarsModifierComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminCarsModifierComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
