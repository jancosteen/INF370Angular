import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubscriptionTypeItemComponent } from './subscription-type-item.component';

describe('SubscriptionTypeItemComponent', () => {
  let component: SubscriptionTypeItemComponent;
  let fixture: ComponentFixture<SubscriptionTypeItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubscriptionTypeItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubscriptionTypeItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
