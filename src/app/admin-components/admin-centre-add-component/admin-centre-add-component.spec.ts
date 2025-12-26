import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCentreAddComponent } from './admin-centre-add-component';

describe('AdminCentreAddComponent', () => {
  let component: AdminCentreAddComponent;
  let fixture: ComponentFixture<AdminCentreAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminCentreAddComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminCentreAddComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
