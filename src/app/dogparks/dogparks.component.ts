import { Component, OnInit } from '@angular/core';
import { DogparkDataService } from '../dogpark-data.service';
import { Dogpark } from '../dogpark';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dogparks',
  templateUrl: './dogparks.component.html',
  styleUrls: ['./dogparks.component.css'],
  providers: [DogparkDataService]
})
export class DogparksComponent implements OnInit {

  dogparks: Dogpark[] = [];

  constructor(
    private dogparkDataService: DogparkDataService,
    private route: ActivatedRoute
  ) {
  }

  public ngOnInit() {
    this.route.data
      .map((data) => data['dogparks'])
      .subscribe(
        (dogparks) => {
          this.dogparks = dogparks;
        }
      );
  }

  onAddDogpark(dogpark) {
    this.dogparkDataService
      .addDogpark(dogpark)
      .subscribe(
        (newDogpark) => {
          this.dogparks = this.dogparks.concat(newDogpark);
        }
      );
  }

  onToggleDogparkComplete(dogpark) {
    this.dogparkDataService
      .toggleDogparkComplete(dogpark)
      .subscribe(
        (updatedDogpark) => {
          dogpark = updatedDogpark;
        }
      );
  }

  onRemoveDogpark(dogpark) {
    this.dogparkDataService
      .deleteDogparkById(dogpark.id)
      .subscribe(
        (_) => {
          this.dogparks = this.dogparks.filter((t) => t.id !== dogpark.id);
        }
      );
  }
}
