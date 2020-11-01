import { TestBed } from '@angular/core/testing';

import { DrawDefectService } from './draw-defect.service';

describe('DrawDefectService', () => {
  let service: DrawDefectService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DrawDefectService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
