import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCentreModifierComponent } from './admin-centre-modifier-component';

describe('AdminCentreModifierComponent', () => {
  let component: AdminCentreModifierComponent;
  let fixture: ComponentFixture<AdminCentreModifierComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminCentreModifierComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminCentreModifierComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
