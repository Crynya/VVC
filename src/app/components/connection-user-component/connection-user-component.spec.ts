import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConnectionUserComponent } from './connection-user-component';

describe('ConnectionUserComponent', () => {
  let component: ConnectionUserComponent;
  let fixture: ComponentFixture<ConnectionUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConnectionUserComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConnectionUserComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
