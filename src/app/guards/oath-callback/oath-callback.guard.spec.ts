import { TestBed, async, inject } from '@angular/core/testing';

import { OathCallbackGuard } from './oath-callback.guard';

describe('OathCallbackGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [OathCallbackGuard]
    });
  });

  it('should ...', inject([OathCallbackGuard], (guard: OathCallbackGuard) => {
    expect(guard).toBeTruthy();
  }));
});
