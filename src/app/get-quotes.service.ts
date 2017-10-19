import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { Http } from '@angular/http';
import 'rxjs/Rx';
import * as firebase from 'firebase';

@Injectable()
export class GetQuotesService {

  quotes: FirebaseListObservable<any[]>;
  responseData = [];

  constructor(private http: Http, db: AngularFireDatabase) {
    this.quotes = db.list('/quotes');
  }

  fetchAllQuotes() {
    return this.quotes;
  }

  fetchFakeData() {
    return this.http.get('assets/data.json').map(
      (res) => res.json()
    );
  }

  addNewQuote(newQuote) {
    this.quotes.push(newQuote);
  }

  updateQuote(updateDetails) {
    this.quotes.update(updateDetails.articleId, updateDetails);
  }

  deleteQuote(id) {
    this.quotes.remove(id);
  }
}
