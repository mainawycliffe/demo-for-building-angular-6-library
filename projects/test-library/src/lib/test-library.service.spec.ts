import { TestBed, inject } from '@angular/core/testing';

import { TestLibraryService } from './test-library.service';

describe('TestLibraryService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TestLibraryService]
    });
  });

  it('should be created', inject([TestLibraryService], (service: TestLibraryService) => {
    expect(service).toBeTruthy();
  }));
});
