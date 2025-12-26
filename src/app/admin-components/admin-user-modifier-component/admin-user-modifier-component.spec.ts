import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminUserModifierComponent } from './admin-user-modifier-component';

describe('AdminUserModifierComponent', () => {
  let component: AdminUserModifierComponent;
  let fixture: ComponentFixture<AdminUserModifierComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminUserModifierComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminUserModifierComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
