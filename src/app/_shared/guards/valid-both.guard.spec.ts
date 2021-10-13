import { TestBed } from '@angular/core/testing';

import { ValidBothGuard } from './valid-both.guard';

describe('ValidBothGuard', () => {
  let guard: ValidBothGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(ValidBothGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
