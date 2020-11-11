import { TestBed } from '@angular/core/testing';

import { SkyrimPlanningService } from './skyrim-planning.service';

describe('SkyrimPlanningService', () => {
  let service: SkyrimPlanningService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SkyrimPlanningService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
