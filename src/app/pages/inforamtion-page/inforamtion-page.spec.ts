import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InforamtionPage } from './inforamtion-page';

describe('InforamtionPage', () => {
  let component: InforamtionPage;
  let fixture: ComponentFixture<InforamtionPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InforamtionPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InforamtionPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
