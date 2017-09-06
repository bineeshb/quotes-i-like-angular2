import { RouterModule } from '@angular/router';
import { FromArticleComponent } from './from-article/from-article.component';

export const APP_ROUTES = RouterModule.forRoot([
  {path: ':from', component: FromArticleComponent},
  {path: '', redirectTo: '/books', pathMatch: 'full'}
]);
