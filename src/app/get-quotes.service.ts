import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class GetQuotesService {

  constructor(private http: Http) { }

  fetchData() {
    return this.http.get('assets/data.json').map(
      (res) => res.json()
    );
  }
}
