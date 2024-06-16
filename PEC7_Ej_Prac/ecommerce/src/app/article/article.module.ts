import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; // Importar FormsModule y ReactiveFormsModule
import { ArticleListComponent } from './article-list/article-list.component';
import { ArticleNewReactiveComponent } from './article-new-reactive/article-new-reactive.component';
import { ArticleDetailComponent } from './article-detail/article-detail.component';
import { ArticleRoutingModule } from './article-routing.module'; // Importar ArticleRoutingModule
import{ArticleItemComponent} from './article-item/article-item.component'

@NgModule({
  declarations: [
    ArticleListComponent,
    ArticleNewReactiveComponent,
    ArticleDetailComponent,
    ArticleItemComponent
  ],
  imports: [
    CommonModule,
    FormsModule, // Añadir FormsModule aquí
    ReactiveFormsModule,
    ArticleRoutingModule
  ],
  exports: [
    ArticleListComponent,
    ArticleNewReactiveComponent,
    ArticleDetailComponent,
  ]
})
export class ArticleModule { }
