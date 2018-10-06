import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Dogpark } from '../dogpark';

@Component({
  selector: 'app-dogpark-list-item',
  templateUrl: './dogpark-list-item.component.html',
  styleUrls: ['./dogpark-list-item.component.css']
})
export class DogparkListItemComponent {

  @Input() dogpark: Dogpark;

  @Output()
  remove: EventEmitter<Dogpark> = new EventEmitter();

  @Output()
  toggleComplete: EventEmitter<Dogpark> = new EventEmitter();

  constructor() {
  }

  toggleDogparkComplete(dogpark: Dogpark) {
    this.toggleComplete.emit(dogpark);
  }

  removeDogpark(dogpark: Dogpark) {
    this.remove.emit(dogpark);
  }

}
