import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { Article } from '../article.interface';

@Component({
  selector: 'app-article-item',
  templateUrl: './article-item.component.html',
  styleUrls: ['./article-item.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ArticleItemComponent {
  @Input() article: Article;
  @Output() ArticleQuantityChange = new EventEmitter<{ article: Article, quantity: number }>();

  constructor(private cdr: ChangeDetectorRef) {}

  incrementQuantity() {
    this.article.quantityInCart++;
    this.ArticleQuantityChange.emit({ article: this.article, quantity: this.article.quantityInCart });
    this.cdr.markForCheck();
  }

  decrementQuantity() {
    if (this.article.quantityInCart > 0) {
      this.article.quantityInCart--;
      this.ArticleQuantityChange.emit({ article: this.article, quantity: this.article.quantityInCart });
      this.cdr.markForCheck();
    }
  }
}
