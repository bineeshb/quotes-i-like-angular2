import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-quotes',
  templateUrl: './form-quotes.component.html',
  styleUrls: ['./form-quotes.component.scss']
})
export class FormQuotesComponent implements OnInit {
  fromCategory = [
    { label: 'Books', value: 'books' },
    { label: 'Internet', value: 'internet' },
    { label: 'Personalities', value: 'personalities' },
    { label: 'Movies', value: 'movies' },
    { label: 'TV shows', value: 'tvshows' }
  ];
  selectedFrom: string;
  model = {
    from: "",
    title: "",
    titleWebsite: "",
    by: "",
    byWebsite: "",
    quotes: [""]
  };

  constructor() {
    this.selectedFrom = "books";
  }

  ngOnInit() {
  }

  saveQuotes() {
    console.log(JSON.stringify(this.model));
  }

  resetForm() {
    this.model = {
      from: "",
      title: "",
      titleWebsite: "",
      by: "",
      byWebsite: "",
      quotes: [""]
    };
  }

  addAnotherQuote() {
    this.model.quotes.push("");
  }

  deleteQuote(index) {
    this.model.quotes.splice(index, 1);
  }

  trackByIndex(index: number, obj: any): any {
    return index;
  }
}
