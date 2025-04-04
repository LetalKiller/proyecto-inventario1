import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BullsComponent } from './bulls.component';

describe('BullsComponent', () => {
  let component: BullsComponent;
  let fixture: ComponentFixture<BullsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BullsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BullsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
