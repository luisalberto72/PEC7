import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticleListComponent } from './article-list/article-list.component';
import { ArticleNewReactiveComponent } from './article-new-reactive/article-new-reactive.component';
import { ArticleDetailComponent } from './article-detail/article-detail.component';
import { AuthGuard } from '../shared/guards/auth.guard';

const routes: Routes = [
  { path: 'list', component: ArticleListComponent},
  { path: 'create', component: ArticleNewReactiveComponent, canActivate: [AuthGuard] },
  { path: ':id', component: ArticleDetailComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ArticleRoutingModule { }

