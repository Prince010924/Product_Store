import { TestBed } from '@angular/core/testing';

import { ServicesfakestoreService } from './servicesfakestore.service';

describe('ServicesfakestoreService', () => {
  let service: ServicesfakestoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicesfakestoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
