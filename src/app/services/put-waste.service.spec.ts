import { TestBed } from '@angular/core/testing';

import { PutWasteService } from './put-waste.service';

describe('PutWasteService', () => {
  let service: PutWasteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PutWasteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
