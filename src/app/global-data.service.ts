import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class GlobalDataService {
  categories = [
    { label: 'Books', reference: 'books', iconClass: 'fa-book' },
    { label: 'Internet', reference: 'internet', iconClass: 'fa-globe' },
    { label: 'Personalities', reference: 'personalities', iconClass: 'fa-users' },
    { label: 'Movies', reference: 'movies', iconClass: 'fa-film' },
    { label: 'TV shows', reference: 'tvshows', iconClass: 'fa-television' }
  ];
  selectedCategory: string;
  private _quotesSource = new BehaviorSubject<Array<any>>([]);
  quotes$ = this._quotesSource.asObservable();

  constructor() { }

  updateQuotes(data) {
    this._quotesSource.next(data);
  }
}
