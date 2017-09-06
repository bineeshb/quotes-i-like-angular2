import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { Http } from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class GetQuotesService {

  quotes: FirebaseListObservable<any[]>;

  constructor(private http: Http, db: AngularFireDatabase) {
    this.quotes = db.list('/quotes');
  }

  fetchAllQuotes() {
    /*return this.http.get('assets/data.json').map(
      (res) => res.json()
    );*/
    return this.quotes;
  }
}
