import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainingSlotItemComponent } from './training-slot-item.component';

describe('TrainingSlotItemComponent', () => {
  let component: TrainingSlotItemComponent;
  let fixture: ComponentFixture<TrainingSlotItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrainingSlotItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrainingSlotItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
