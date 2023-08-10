import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HodCardsComponent } from './hod-cards.component';

describe('HodCardsComponent', () => {
  let component: HodCardsComponent;
  let fixture: ComponentFixture<HodCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HodCardsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HodCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
