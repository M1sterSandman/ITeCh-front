import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

  getShortDate(date) {
    const shortMonthName = ['СІЧНЯ', 'ЛЮТОГО', 'БЕРЕЗНЯ', 'КВІТНЯ', 'ТРАВНЯ', 'ЧЕРВНЯ', 'ЛИПНЯ',
      'СЕРПНЯ', 'ВЕРЕСНЯ', 'ЖОВТНЯ', 'ЛИСТОПАДА', 'ГРУДНЯ'];
    const monthNumber = Number(date.split('.')[1]) - 1;
    const dayNumber = date.split('.')[0];
    return [dayNumber, shortMonthName[monthNumber]];
  }
}
