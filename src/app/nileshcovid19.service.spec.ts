import { TestBed } from '@angular/core/testing';

import { Nileshcovid19Service } from './nileshcovid19.service';

describe('Nileshcovid19Service', () => {
  let service: Nileshcovid19Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Nileshcovid19Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
