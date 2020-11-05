import { TestBed } from '@angular/core/testing';

import { RobService } from './rob.service';

describe('RobService', () => {
  let service: RobService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RobService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
