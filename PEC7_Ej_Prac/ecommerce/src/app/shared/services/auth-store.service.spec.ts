import { TestBed } from '@angular/core/testing';

import { AuthStore } from '../services/auth-store.service';

describe('AuthStoreService', () => {
  let service: AuthStore;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthStore);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
