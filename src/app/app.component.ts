import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  navLinks = [
    { linkLabel: 'Books', routerPath: 'books', iconClass: 'fa-book', linkClass: '' },
    { linkLabel: 'Internet', routerPath: 'internet', iconClass: 'fa-globe', linkClass: '' },
    { linkLabel: 'Personalities', routerPath: 'personalities', iconClass: 'fa-users', linkClass: '' },
    { linkLabel: 'Movies', routerPath: 'movies', iconClass: 'fa-film', linkClass: '' },
    { linkLabel: 'TV shows', routerPath: 'tvshows', iconClass: 'fa-television', linkClass: '' }/*,
    { linkLabel: 'Add a new quote', routerPath: 'addnewquote', iconClass: 'fa-plus-circle', linkClass: 'tab_add_quote' }*/
  ];
}
