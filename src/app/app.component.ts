import { Component, ViewChild } from '@angular/core';
import { GlobalDataService } from './global-data.service';
import { GetQuotesService } from './get-quotes.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private getQuotesService: GetQuotesService, private globalData: GlobalDataService) {
  }

  ngOnInit() {
    this.getQuotesService.fetchAllQuotes().subscribe(
      (data) => {
        this.getQuotesService.responseData = data;
        this.globalData.updateQuotes(data);
      }
    );
  }
}
