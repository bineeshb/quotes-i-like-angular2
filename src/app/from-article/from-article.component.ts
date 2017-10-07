import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GetQuotesService } from '../get-quotes.service';
import { BsModalService } from 'ngx-bootstrap';
import { BsModalRef } from 'ngx-bootstrap/modal/modal-options.class';
import { AppModalsComponent } from '../app-modals/app-modals.component';

@Component({
  selector: 'app-from-article',
  templateUrl: './from-article.component.html',
  styleUrls: ['./from-article.component.scss']
})
export class FromArticleComponent implements OnInit {
  articles = [];
  responseData = [];
  category = null;
  bsModalRef: BsModalRef;
  deleteArticleId: string;

  constructor(
    private route: ActivatedRoute,
    private getQuotesService: GetQuotesService,
    private bsModalService: BsModalService
  ) {
  }

  ngOnInit() {
    this.getQuotesService.fetchAllQuotes().subscribe(
      (data) => {
        this.responseData = data;
        this.resetComponentDetails();
      }
    );

    // if(this.responseData.length < 1) {
    //   this.getQuotesService.fetchFakeData().subscribe(
    //     (data) => {
    //       this.responseData = data;
    //       this.resetComponentDetails();
    //     }
    //   );
    // }

    this.route.params.forEach(params => {
      this.category = params["from"];
      this.resetComponentDetails();
    });
  }

  resetComponentDetails() {
    let comp = this;
    this.articles = this.responseData.filter(function(eachArticle) {
      return (eachArticle.from === comp.category);
    });
  }

  deleteArticle(id) {
    this.bsModalRef = this.bsModalService.show(AppModalsComponent);
    this.deleteArticleId = id;
    this.bsModalRef.content.modalType = "delArticle";
    this.bsModalRef.content.callbackFunc = this.confirmDeleteArticle.bind(this);
  }

  confirmDeleteArticle() {
    if(this.deleteArticleId !== null && this.deleteArticleId !== undefined) {
      this.getQuotesService.deleteQuote(this.deleteArticleId);
      this.deleteArticleId = null;
    }
    this.bsModalRef.hide();
  }

  editArticle() {
    this.bsModalRef = this.bsModalService.show(AppModalsComponent);
    //this.editArticleId = id;
    this.bsModalRef.content.modalType = "editArticle";
    //this.bsModalRef.content.callbackFunc = this.confirmDeleteArticle.bind(this);
  }
}
