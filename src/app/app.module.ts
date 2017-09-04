import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { FromArticleComponent } from './from-article/from-article.component';
import { GetQuotesService } from './get-quotes.service';
import { APP_ROUTES } from './app.routes';

@NgModule({
  declarations: [
    AppComponent,
    FromArticleComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    APP_ROUTES
  ],
  providers: [GetQuotesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
