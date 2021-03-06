import { Component, OnInit, Input } from '@angular/core';
import * as _ from 'lodash';
import { ReactiveFormsModule, FormGroup, FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { GlobalDataService } from '../global-data.service';
import { GetQuotesService } from '../get-quotes.service';
import { BsModalService } from 'ngx-bootstrap';
import { BsModalRef } from 'ngx-bootstrap/modal/modal-options.class';
import { AppModalsComponent } from '../app-modals/app-modals.component';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-from-article',
  templateUrl: './from-article.component.html',
  styleUrls: ['./from-article.component.scss']
})
export class FromArticleComponent implements OnInit {
  articles = [];
  category = null;
  bsModalRef: BsModalRef;
  deleteArticleId: string;
  sortBy: string = "asc";
  searchString: string;
  subscription: Subscription;
  quotes: Array<any> = [];

  constructor(
    private route: ActivatedRoute,
    private globalData: GlobalDataService,
    private getQuotesService: GetQuotesService,
    private bsModalService: BsModalService
  ) {
  }

  ngOnInit() {
    let categoryObj;

    this.subscription = this.globalData.quotes$.subscribe(data => {
      this.quotes = data; 
      this.resetComponentDetails();
    });

    this.route.params.forEach(params => {
      this.category = params["from"];
      categoryObj = _.find(this.globalData.categories, ['reference', this.category]);
      this.globalData.selectedCategory = categoryObj.label;
      this.resetComponentDetails();
    });
  }

  resetComponentDetails() {
    let comp = this;
    this.articles = this.quotes.filter(function(eachArticle) {
      return (eachArticle.from === comp.category);
    });
    this.sortArticles();
  }

  deleteArticle(id) {
    if(id !== null && id !== undefined) {
      this.deleteArticleId = id;
      this.bsModalRef = this.bsModalService.show(AppModalsComponent);
      this.bsModalRef.content.modalType = "delArticle";
      this.bsModalRef.content.callbackFunc = this.confirmDeleteArticle.bind(this);
    }
  }

  confirmDeleteArticle() {
    if(this.deleteArticleId !== null && this.deleteArticleId !== undefined) {
      this.getQuotesService.deleteQuote(this.deleteArticleId);
      this.deleteArticleId = null;
    }
    this.bsModalRef.hide();
  }

  editArticle(id) {
    let editArticle;
    
    if(id !== null && id !== undefined) {
      editArticle = _.cloneDeep(this.articles.find(function(eachArticle) {
        return eachArticle.$key === id;
      }));
    }

    if(editArticle !== null && editArticle !== undefined) {
      editArticle.articleId = id;
      this.bsModalRef = this.bsModalService.show(AppModalsComponent);
      this.bsModalRef.content.modalType = "editArticle";
      this.bsModalRef.content.editArticleModel = editArticle;
    }
  }

  sortArticles() {
    this.articles = _.orderBy(this.articles, ['title'], [this.sortBy]);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
