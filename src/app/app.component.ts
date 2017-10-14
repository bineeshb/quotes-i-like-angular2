import { Component } from '@angular/core';
import $ from 'jquery';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  navLinks = [
    { linkLabel: 'Books', routerPath: 'books' },
    { linkLabel: 'Internet', routerPath: 'internet' },
    { linkLabel: 'Personalities', routerPath: 'personalities' },
    { linkLabel: 'Movies', routerPath: 'movies' },
    { linkLabel: 'TV shows', routerPath: 'tvshows' }
  ];
  selectedCategory: string = 'Books';
}
