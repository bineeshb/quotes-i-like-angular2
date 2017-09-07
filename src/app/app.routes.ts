import { RouterModule } from '@angular/router';
import { FromArticleComponent } from './from-article/from-article.component';
import { FormQuotesComponent } from './form-quotes/form-quotes.component';

export const APP_ROUTES = RouterModule.forRoot([
  {path: 'addnewquote', component: FormQuotesComponent },
  {path: ':from', component: FromArticleComponent},
  {path: '', redirectTo: '/books', pathMatch: 'full'}
]);
