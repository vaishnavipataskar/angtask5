import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoLeavesComponent } from './no-leaves.component';

describe('NoLeavesComponent', () => {
  let component: NoLeavesComponent;
  let fixture: ComponentFixture<NoLeavesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NoLeavesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NoLeavesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
