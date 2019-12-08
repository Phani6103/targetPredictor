import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PredictionsService {
  constructor( private http: HttpClient) {

  }

  getPredictionsData() {
    return this.http.get('https://1tlzthxuw3.execute-api.us-west-2.amazonaws.com/dev/posts');
  }

  postPredictionsData() {
    this.http.post('', '');
  }
}
