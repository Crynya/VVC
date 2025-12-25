import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CentreServices } from './centre-services';

describe('CentreServices', () => {
  let component: CentreServices;
  let fixture: ComponentFixture<CentreServices>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CentreServices]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CentreServices);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
