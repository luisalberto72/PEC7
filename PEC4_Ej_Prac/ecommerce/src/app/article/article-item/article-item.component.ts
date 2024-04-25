import { Component,Input,Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { Article } from '../article.interface';

@Component({
  selector: 'app-article-item',
  templateUrl: './article-item.component.html',
  styleUrl: './article-item.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ArticleItemComponent {

  @Input() article: Article;
  @Output() articleQuantityChange = new EventEmitter<{ article: Article, quantity: number }>();
  
  incrementQuantity() {
    this.article.quantityInCart++;
    this.articleQuantityChange.emit({ article: this.article, quantity: this.article.quantityInCart });
  }

  decrementQuantity() {
    if (this.article.quantityInCart > 0) {
      this.article.quantityInCart--;
      this.articleQuantityChange.emit({ article: this.article, quantity: this.article.quantityInCart });
    }
  }
}
