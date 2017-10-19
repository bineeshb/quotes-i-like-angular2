import { RouterModule } from '@angular/router';
import { FromArticleComponent } from './from-article/from-article.component';
import { FormQuotesComponent } from './form-quotes/form-quotes.component';
import { DashboardComponent } from './dashboard/dashboard.component';

export const APP_ROUTES = RouterModule.forRoot([
  {path: 'dashboard', component: DashboardComponent},
  {path: 'addnewquote', component: FormQuotesComponent },
  {path: ':from', component: FromArticleComponent},
  {path: '', redirectTo: '/dashboard', pathMatch: 'full'}
]);
