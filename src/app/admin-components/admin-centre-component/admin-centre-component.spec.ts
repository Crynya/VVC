import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCentreComponent } from './admin-centre-component';

describe('AdminCentreComponent', () => {
  let component: AdminCentreComponent;
  let fixture: ComponentFixture<AdminCentreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminCentreComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminCentreComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
