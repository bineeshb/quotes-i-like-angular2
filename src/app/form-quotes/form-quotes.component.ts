import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GetQuotesService } from '../get-quotes.service';
import { AppModalsComponent } from '../app-modals/app-modals.component';
import { BsModalService } from 'ngx-bootstrap';
import { BsModalRef } from 'ngx-bootstrap/modal/modal-options.class';

@Component({
  selector: 'app-form-quotes',
  templateUrl: './form-quotes.component.html',
  styleUrls: ['./form-quotes.component.scss']
})
export class FormQuotesComponent implements OnInit {
  bsModalRef: BsModalRef;
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
  deleteQuoteIndex: number;

  constructor(
    private getQuotesService: GetQuotesService,
    private router: Router,
    private bsModalService: BsModalService
  ) {
    this.selectedFrom = "books";
  }

  ngOnInit() {
  }

  saveQuotes() {
    this.getQuotesService.addNewQuote(this.model);

    this.router.navigate([this.model.from]);
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
    if(this.model.quotes[index] === "") {
      this.model.quotes.splice(index, 1);
    } else {
      this.bsModalRef = this.bsModalService.show(AppModalsComponent);
      this.bsModalRef.content.modalType = "delQuote";
      this.deleteQuoteIndex = index;
      this.bsModalRef.content.callbackFunc = this.confirmDeleteQuote.bind(this);
    }
  }

  trackByIndex(index: number, obj: any): any {
    return index;
  }

  confirmDeleteQuote() {
    if(this.deleteQuoteIndex !== null && this.deleteQuoteIndex !== undefined) {
      this.model.quotes.splice(this.deleteQuoteIndex, 1);
      this.deleteQuoteIndex = null;
    }
    this.bsModalRef.hide();
  }
}
