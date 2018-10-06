import { Component, Output, EventEmitter } from '@angular/core';
import { Dogpark } from '../dogpark';

@Component({
  selector: 'app-dogpark-list-header',
  templateUrl: './dogpark-list-header.component.html',
  styleUrls: ['./dogpark-list-header.component.css']
})
export class DogparkListHeaderComponent {

  newDogpark: Dogpark = new Dogpark();

  @Output()
  add: EventEmitter<Dogpark> = new EventEmitter();

  constructor() {
  }

  addDogpark() {
    this.add.emit(this.newDogpark);
    this.newDogpark = new Dogpark();
  }

}
