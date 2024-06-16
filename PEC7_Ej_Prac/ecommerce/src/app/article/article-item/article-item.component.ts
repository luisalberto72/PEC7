import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { Article } from '../article.interface';



@Component({
  selector: 'app-article-item',
  templateUrl: './article-item.component.html',
  styleUrls: ['./article-item.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ArticleItemComponent {
  
  @Input() articles: Article;
  @Output() ArticleQuantityChange = new EventEmitter<{ article: Article, quantity: number }>();

  constructor(private cdr: ChangeDetectorRef) {}

  incrementQuantity() {
    this.articles.quantityInCart++;
    this.ArticleQuantityChange.emit({ article: this.articles, quantity: this.articles.quantityInCart });
    this.cdr.markForCheck();
  }

  decrementQuantity() {
    if (this.articles.quantityInCart > 0) {
      this.articles.quantityInCart--;
      this.ArticleQuantityChange.emit({ article: this.articles, quantity: this.articles.quantityInCart });
      this.cdr.markForCheck();
    }
  }
}