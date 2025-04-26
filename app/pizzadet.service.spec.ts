import { TestBed } from '@angular/core/testing';

import { PizzadetService } from './pizzadet.service';

describe('PizzadetService', () => {
  let service: PizzadetService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PizzadetService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
