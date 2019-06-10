import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainingSlotComponent } from './training-slot.component';

describe('TrainingSlotComponent', () => {
  let component: TrainingSlotComponent;
  let fixture: ComponentFixture<TrainingSlotComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrainingSlotComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrainingSlotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
