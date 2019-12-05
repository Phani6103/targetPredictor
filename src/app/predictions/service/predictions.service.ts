import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PredictionsService {
  constructor( private http: HttpClient) {

  }

  getPredictionsData() {
    console.log('getMethod Invoked');

    // under construction
    // this.http.get('https://1tlzthxuw3.execute-api.us-west-2.amazonaws.com/dev/posts')
    //   .subscribe( resp => {
    //       console.log('resp');
    //     },
    //     error => {
    //       console.log('error: ', error);
    //     });
  }

  postPredictionsData() {
    this.http.post('', '');
  }
}
