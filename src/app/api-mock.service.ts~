import { Injectable } from '@angular/core';
import { Dogpark } from './dogpark';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

@Injectable()
export class ApiMockService {

  constructor(
  ) {
  }

  public getAllDogparks(): Observable<Dogpark[]> {
    return Observable.of([
      new Dogpark({id: 1, title: 'Read article', complete: false})
    ]);
  }

  public createDogpark(dogpark: Dogpark): Observable<Dogpark> {
    return Observable.of(
      new Dogpark({id: 1, title: 'Read article', complete: false})
    );
  }

  public getDogparkById(dogparkId: number): Observable<Dogpark> {
    return Observable.of(
      new Dogpark({id: 1, title: 'Read article', complete: false})
    );
  }

  public updateDogpark(dogpark: Dogpark): Observable<Dogpark> {
    return Observable.of(
      new Dogpark({id: 1, title: 'Read article', complete: false})
    );
  }

  public deleteDogparkById(dogparkId: number): Observable<null> {
    return null;
  }
}
