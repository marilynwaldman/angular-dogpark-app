import { Component, Input } from '@angular/core';
import { Dogpark } from '../dogpark';

@Component({
  selector: 'app-dogpark-list-footer',
  templateUrl: './dogpark-list-footer.component.html',
  styleUrls: ['./dogpark-list-footer.component.css']
})
export class DogparkListFooterComponent {

  @Input()
  dogparks: Dogpark[];

  constructor() {
  }

}
