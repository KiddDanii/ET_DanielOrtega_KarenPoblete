import { TestBed } from '@angular/core/testing';

import { ServiceferiadosService } from './serviceferiados.service';

describe('ServiceferiadosService', () => {
  let service: ServiceferiadosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceferiadosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
