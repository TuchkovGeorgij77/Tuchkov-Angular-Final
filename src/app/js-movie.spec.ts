import { TestBed } from '@angular/core/testing';

import { JsMovie } from './js-movie';

describe('JsMovie', () => {
  let service: JsMovie;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JsMovie);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
