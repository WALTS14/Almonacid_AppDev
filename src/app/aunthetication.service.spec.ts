import { TestBed } from '@angular/core/testing';

import { AuntheticationService } from './aunthetication.service';

describe('AuntheticationService', () => {
  let service: AuntheticationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuntheticationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
