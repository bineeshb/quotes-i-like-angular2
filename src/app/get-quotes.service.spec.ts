import { TestBed, inject } from '@angular/core/testing';

import { GetQuotesService } from './get-quotes.service';

describe('GetQuotesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GetQuotesService]
    });
  });

  it('should be created', inject([GetQuotesService], (service: GetQuotesService) => {
    expect(service).toBeTruthy();
  }));
});
