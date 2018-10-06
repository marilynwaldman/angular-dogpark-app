import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Dogpark } from '../dogpark';

@Component(
  {
    selector: 'app-dogpark-list',
    templateUrl: './dogpark-list.component.html',
    styleUrls: ['./dogpark-list.component.css']
  }
)
export class DogparkListComponent {

  @Input()
  dogparks: Dogpark[];

  @Output()
  remove: EventEmitter<Dogpark> = new EventEmitter();

  @Output()
  toggleComplete: EventEmitter<Dogpark> = new EventEmitter();

  constructor() {
  }

  onToggleDogparkComplete(dogpark: Dogpark) {
    this.toggleComplete.emit(dogpark);
  }

  onRemoveDogpark(dogpark: Dogpark) {
    this.remove.emit(dogpark);
  }

}
