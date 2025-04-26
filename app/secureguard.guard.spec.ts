import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { secureguardGuard } from './secureguard.guard';

describe('secureguardGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => secureguardGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
