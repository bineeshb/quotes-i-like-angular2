import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GetQuotesService } from '../get-quotes.service';

@Component({
  selector: 'app-from-article',
  templateUrl: './from-article.component.html',
  styleUrls: ['./from-article.component.scss']
})
export class FromArticleComponent implements OnInit {
  articles = [];
  responseData = [];
  category = null;

  constructor(private route: ActivatedRoute, private getQuotesService: GetQuotesService) {
  }

  ngOnInit() {
    this.getQuotesService.fetchData().subscribe(
      (data) => {
        this.responseData = data;
        this.resetComponentDetails();
      }
    );
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
}
