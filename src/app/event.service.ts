import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Event} from './event';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  constructor(private http: HttpClient) {}

  link = "https://itech-9245d.firebaseio.com/events";

  load() {
    return this.http.get(this.link + '.json');
  }

  addFeedback(post_id, feedback) {
    return this.http.patch(this.link + "/" + post_id.toString() + "/feedback.json", feedback);
  }

  setRating(post_id, rating) {
    return this.http.patch(this.link + "/" + post_id.toString() + ".json", {"rating":rating});
  }
}
