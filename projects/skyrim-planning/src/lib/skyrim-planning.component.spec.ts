import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkyrimPlanningComponent } from './skyrim-planning.component';

describe('SkyrimPlanningComponent', () => {
  let component: SkyrimPlanningComponent;
  let fixture: ComponentFixture<SkyrimPlanningComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SkyrimPlanningComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SkyrimPlanningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
