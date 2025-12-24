import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarsServices } from './cars-services';

describe('CarsServices', () => {
  let component: CarsServices;
  let fixture: ComponentFixture<CarsServices>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarsServices]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarsServices);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
