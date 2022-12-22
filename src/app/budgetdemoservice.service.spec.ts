import { TestBed } from '@angular/core/testing';

import { BudgetdemoserviceService } from './budgetdemoservice.service';

describe('BudgetdemoserviceService', () => {
  let service: BudgetdemoserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BudgetdemoserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
