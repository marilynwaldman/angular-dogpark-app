import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Dogpark } from './dogpark';
import { DogparkDataService } from './dogpark-data.service';

@Injectable()
export class DogparksResolver implements Resolve<Observable<Dogpark[]>> {

  constructor(
    private dogparkDataService: DogparkDataService
  ) {
  }

  public resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<Dogpark[]> {
    return this.dogparkDataService.getAllDogparks();
  }
}
