import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { environment } from '../environments/environment';

import { ModalModule } from 'ngx-bootstrap/modal';

import { AppComponent } from './app.component';
import { FromArticleComponent } from './from-article/from-article.component';
import { FormQuotesComponent } from './form-quotes/form-quotes.component';
import { GetQuotesService } from './get-quotes.service';
import { APP_ROUTES } from './app.routes';
import { AppModalsComponent } from './app-modals/app-modals.component';

@NgModule({
  declarations: [
    AppComponent,
    FromArticleComponent,
    FormQuotesComponent,
    AppModalsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    APP_ROUTES,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    ModalModule.forRoot()
  ],
  entryComponents: [AppModalsComponent],
  providers: [GetQuotesService],
  bootstrap: [AppComponent]
})

export class AppModule {}