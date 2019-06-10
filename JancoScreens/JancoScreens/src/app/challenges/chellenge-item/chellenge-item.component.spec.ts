import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChellengeItemComponent } from './chellenge-item.component';

describe('ChellengeItemComponent', () => {
  let component: ChellengeItemComponent;
  let fixture: ComponentFixture<ChellengeItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChellengeItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChellengeItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
