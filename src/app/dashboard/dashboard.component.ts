import { Component, OnInit } from '@angular/core';
import { GlobalDataService } from '../global-data.service';
import { Subscription } from 'rxjs/Subscription';
import * as _ from 'lodash';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  subscription: Subscription;
  quotes: Array<any> = [];

  chartLabels: string[];
  doughnutChartData: number[];
  barChartLegend:boolean = true;
  barChartOptions:any = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  barChartData:any[] = [
    {data: [], label: 'No. of articles'},
    {data: [], label: 'Highest no. of quotes in a article'}
  ];

  constructor(private globalData: GlobalDataService) { }

  ngOnInit() {
    this.subscription = this.globalData.quotes$.subscribe(data => {
      this.quotes = data;
      this.updateStats();
    });
  }

  updateStats() {
    let comp = this, stats;
    
    comp.chartLabels = [];
    comp.doughnutChartData = [];
    comp.barChartData[0].data = [];
    comp.barChartData[1].data = [];

    stats = _.reduce(this.quotes, function(result, eachQuote) {
      if(!result[eachQuote.from]) {
        result[eachQuote.from] = {
          totalNoOfQuotes: 0,
          noOfArticles: 0,
          highestQuotes: {
            in: '',
            noOfQuotes: 0
          }
        };
      }

      result[eachQuote.from].totalNoOfQuotes = (result[eachQuote.from].totalNoOfQuotes + eachQuote.quotes.length);
      result[eachQuote.from].noOfArticles = (result[eachQuote.from].noOfArticles + 1);

      if(eachQuote.quotes.length > result[eachQuote.from].highestQuotes.noOfQuotes) {
        result[eachQuote.from].highestQuotes = {
          in: eachQuote.title,
          noOfQuotes: eachQuote.quotes.length
        };
      }

      return result;
    }, {});
    
    _.forEach(this.globalData.categories, function(eachCategory) {
      if(!!stats[eachCategory.reference]) {
        comp.chartLabels.push(eachCategory.label);
        comp.barChartData[0].data.push(stats[eachCategory.reference].noOfArticles);
        comp.barChartData[1].data.push(stats[eachCategory.reference].highestQuotes.noOfQuotes);
        comp.doughnutChartData.push(stats[eachCategory.reference].totalNoOfQuotes);
      }
    });
  }
  
    ngOnDestroy() {
      this.subscription.unsubscribe();
    }
}
