import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class GlobalDataService {
  categories = [
    { label: 'Books', reference: 'books' },
    { label: 'Internet', reference: 'internet' },
    { label: 'Personalities', reference: 'personalities' },
    { label: 'Movies', reference: 'movies' },
    { label: 'TV shows', reference: 'tvshows' }
  ];
  selectedCategory: string;
  private _quotesSource = new BehaviorSubject<Array<any>>([]);
  quotes$ = this._quotesSource.asObservable();

  constructor() { }

  updateQuotes(data) {
    this._quotesSource.next(data);
  }
}
