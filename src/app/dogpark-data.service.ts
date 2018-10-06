import { Injectable } from '@angular/core';
import { Dogpark } from './dogpark';
import { ApiService } from './api.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/delay';

@Injectable()
export class DogparkDataService {

  constructor(
    private api: ApiService
  ) {
  }

  // Simulate POST /dogparks
  addDogpark(dogpark: Dogpark): Observable<Dogpark> {
    return this.api.createDogpark(dogpark);
  }

  // Simulate DELETE /dogparks/:id
  deleteDogparkById(dogparkId: number): Observable<Dogpark> {
    return this.api.deleteDogparkById(dogparkId);
  }

  // Simulate PUT /dogparks/:id
  updateDogpark(dogpark: Dogpark): Observable<Dogpark> {
    return this.api.updateDogpark(dogpark);
  }

  // Simulate GET /dogparks
  getAllDogparks(): Observable<Dogpark[]> {
    return this.api.getAllDogparks().delay(3000);
  }

  // Simulate GET /dogparks/:id
  getDogparkById(dogparkId: number): Observable<Dogpark> {
    return this.api.getDogparkById(dogparkId);
  }

  // Toggle complete
  toggleDogparkComplete(dogpark: Dogpark) {
    dogpark.complete = !dogpark.complete;
    return this.api.updateDogpark(dogpark);
  }

}
