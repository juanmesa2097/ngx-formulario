import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddonEventsComponent } from './addon-events.component';

describe('AddonEventsComponent', () => {
  let component: AddonEventsComponent;
  let fixture: ComponentFixture<AddonEventsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddonEventsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddonEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
