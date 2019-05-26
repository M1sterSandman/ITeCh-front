import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Event} from '../event';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() event: Event;
  @Output() onChangeRating = new EventEmitter<number>();

  constructor() {
  }

  ngOnInit() {
    console.dir(this.event);
  }

  getShortDate(date) {
    const shortMonthName = ['СІЧНЯ', 'ЛЮТОГО', 'БЕРЕЗНЯ', 'КВІТНЯ', 'ТРАВНЯ', 'ЧЕРВНЯ', 'ЛИПНЯ',
      'СЕРПНЯ', 'ВЕРЕСНЯ', 'ЖОВТНЯ', 'ЛИСТОПАДА', 'ГРУДНЯ'];
    const monthNumber = Number(date.split('.')[1]) - 1;
    const dayNumber = date.split('.')[0];
    return [dayNumber, shortMonthName[monthNumber]];
  }

  setRating(rating) {
    return this.event.rating;
  }
}
