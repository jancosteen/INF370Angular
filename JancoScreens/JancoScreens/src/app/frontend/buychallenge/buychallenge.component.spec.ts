import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuychallengeComponent } from './buychallenge.component';

describe('BuychallengeComponent', () => {
  let component: BuychallengeComponent;
  let fixture: ComponentFixture<BuychallengeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuychallengeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuychallengeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
