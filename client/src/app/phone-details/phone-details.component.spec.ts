import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhoneDetailsComponent } from './phone-details.component';

describe('PhoneDetailsComponent', () => {
  let component: PhoneDetailsComponent;
  let fixture: ComponentFixture<PhoneDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhoneDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhoneDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
