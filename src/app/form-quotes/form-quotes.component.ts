import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { GlobalDataService } from '../global-data.service';
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

  @Input()
  editArticleModel: any;

  @Input()
  editBsModalRef: BsModalRef;

  bsModalRef: BsModalRef;
  model = {
    from: "",
    title: "",
    titleWebsite: "",
    by: "",
    byWebsite: "",
    quotes: [""]
  };
  deleteQuoteIndex: number;
  isEditArticle: boolean = false;

  constructor(
    private globalData: GlobalDataService,
    private getQuotesService: GetQuotesService,
    private router: Router,
    private bsModalService: BsModalService
  ) {
  }

  ngOnInit() {
    if(this.editArticleModel) {
      this.model = this.editArticleModel;
      this.isEditArticle = true;
    } else {
      this.isEditArticle = false;
    }
  }

  saveQuotes() {
    if(!this.isEditArticle) {
      this.getQuotesService.addNewQuote(this.model);
    } else {
      this.getQuotesService.updateQuote(this.model);
      this.editBsModalRef.hide();
    }

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
