import {Component, OnInit} from '@angular/core';
import {EventService} from '../event.service';
import {Event} from '../event';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.css']
})
export class CardListComponent implements OnInit {

  constructor(private service: EventService) {
  }
  eventList: any = [];

  ngOnInit() {
    this.service.load().subscribe(
      eventList => {
        this.eventList = eventList;
      }
    );
  }
}
