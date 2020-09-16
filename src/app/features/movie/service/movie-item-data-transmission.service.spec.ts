import { TestBed } from '@angular/core/testing';

import { MovieItemDataTransmissionService } from './movie-item-data-transmission.service';

describe('MovieItemDataTransmissionService', () => {
  let service: MovieItemDataTransmissionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MovieItemDataTransmissionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
