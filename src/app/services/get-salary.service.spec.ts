import { TestBed } from '@angular/core/testing';

import { GetSalaryService } from './get-salary.service';

describe('GetSalaryService', () => {
  let service: GetSalaryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetSalaryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
