import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { environment } from '../environments/environment';

import { ModalModule } from 'ngx-bootstrap/modal';
import { TypeaheadModule } from 'ngx-bootstrap/typeahead';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

import { ChartsModule } from 'ng2-charts';

import { AppComponent } from './app.component';
import { FromArticleComponent } from './from-article/from-article.component';
import { FormQuotesComponent } from './form-quotes/form-quotes.component';
import { AppModalsComponent } from './app-modals/app-modals.component';
import { DashboardComponent } from './dashboard/dashboard.component';

import { GlobalDataService } from './global-data.service';
import { GetQuotesService } from './get-quotes.service';
import { APP_ROUTES } from './app.routes';

@NgModule({
  declarations: [
    AppComponent,
    FromArticleComponent,
    FormQuotesComponent,
    AppModalsComponent,
    DashboardComponent
  ],
  imports: [
    ChartsModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    APP_ROUTES,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    ModalModule.forRoot(),
    TypeaheadModule.forRoot(),
    BsDropdownModule.forRoot()
  ],
  entryComponents: [AppModalsComponent],
  providers: [GlobalDataService, GetQuotesService],
  bootstrap: [AppComponent]
})

export class AppModule {}