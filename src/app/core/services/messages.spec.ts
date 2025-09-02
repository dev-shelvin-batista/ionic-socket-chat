import { TestBed } from '@angular/core/testing';

import { Messages } from './messages';

describe('Messages', () => {
  let service: Messages;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Messages);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
