import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';
import { Http, Response } from '@angular/http';
import { Dogpark } from './dogpark';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

const API_URL = environment.apiUrl;

@Injectable()
export class ApiService {

  constructor(
    private http: Http
  ) {
  }

  public getAllDogparks(): Observable<Dogpark[]> {
    return this.http
      .get(API_URL + '/dogparks')
      .map(response => {
        const dogparks = response.json();
        return dogparks.map((dogpark) => new Dogpark(dogpark));
      })
      .catch(this.handleError);
  }

  public createDogpark(dogpark: Dogpark): Observable<Dogpark> {
    return this.http
      .post(API_URL + '/dogparks', dogpark)
      .map(response => {
        return new Dogpark(response.json());
      })
      .catch(this.handleError);
  }

  public getDogparkById(dogparkId: number): Observable<Dogpark> {
    return this.http
      .get(API_URL + '/dogparks/' + dogparkId)
      .map(response => {
        return new Dogpark(response.json());
      })
      .catch(this.handleError);
  }

  public updateDogpark(dogpark: Dogpark): Observable<Dogpark> {
    return this.http
      .put(API_URL + '/dogparks/' + dogpark.id, dogpark)
      .map(response => {
        return new Dogpark(response.json());
      })
      .catch(this.handleError);
  }

  public deleteDogparkById(dogparkId: number): Observable<null> {
    return this.http
      .delete(API_URL + '/dogparks/' + dogparkId)
      .map(response => null)
      .catch(this.handleError);
  }

  private handleError (error: Response | any) {
    console.error('ApiService::handleError', error);
    return Observable.throw(error);
  }
}
