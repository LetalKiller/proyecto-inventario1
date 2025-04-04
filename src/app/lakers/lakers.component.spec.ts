import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LakersComponent } from './lakers.component';

describe('LakersComponent', () => {
  let component: LakersComponent;
  let fixture: ComponentFixture<LakersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LakersComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LakersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
