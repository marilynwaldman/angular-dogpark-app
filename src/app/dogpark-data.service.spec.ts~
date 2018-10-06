/* tslint:disable:no-unused-variable */

import {TestBed, inject} from '@angular/core/testing';
import {DogparkDataService} from './dogpark-data.service';
import { ApiService } from './api.service';
import { ApiMockService } from './api-mock.service';

describe('DogparkDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        DogparkDataService,
        {
          provide: ApiService,
          useClass: ApiMockService
        }
      ]
    });
  });

  it('should ...', inject([DogparkDataService], (service: DogparkDataService) => {
    expect(service).toBeTruthy();
  }));

});
