import { Component,Input } from '@angular/core';
import { Article } from '../article.interface';

@Component({
  selector: 'app-article-item',
  templateUrl: './article-item.component.html',
  styleUrl: './article-item.component.css'
})
export class ArticleItemComponent {
  //@Input() article: Article;
  article: Article = {
    name: 'Vino Rioja Ramón bilbao',
    imageUrl: '../assets/images/Bilbao.png',
    price: 56.70,
    isOnSale: true,
    quantityInCart: 0
  };

  incrementQuantity() {
    this.article.quantityInCart++;
  }

  decrementQuantity() {
    if (this.article.quantityInCart > 0) {
      this.article.quantityInCart--;
    }
  }
}
