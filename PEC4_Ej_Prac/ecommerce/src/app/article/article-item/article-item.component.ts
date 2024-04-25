import { Component,Input } from '@angular/core';
import { Article } from '../article.interface';

@Component({
  selector: 'app-article-item',
  templateUrl: './article-item.component.html',
  styleUrl: './article-item.component.css'
})
export class ArticleItemComponent {

  @Input() article: Article;
  
  incrementQuantity() {
    this.article.quantityInCart++;
  }

  decrementQuantity() {
    if (this.article.quantityInCart > 0) {
      this.article.quantityInCart--;
    }
  }
}
