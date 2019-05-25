import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Event} from './event';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  constructor(private http: HttpClient) {}

  link = 'http://127.0.0.1:5000/api/';

  load() {
    return this.http.get<Event []>(this.link + 'events');
  }
}
