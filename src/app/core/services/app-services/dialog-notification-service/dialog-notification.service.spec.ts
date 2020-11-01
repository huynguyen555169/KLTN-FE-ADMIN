import { TestBed } from '@angular/core/testing';

import { DialogNotificationService } from './dialog-notification.service';

describe('DialogNotificationService', () => {
  let service: DialogNotificationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DialogNotificationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
