import { Component } from '@angular/core';
import { Article } from '../article/article.interface';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.css']
})
export class ArticleListComponent {

  articles: Article[] = [
    {
      id: 1,
      name: 'Vino Rioja Ramón Bilbao',
      imageUrl: '../assets/images/Bilbao.png',
      price: 56.70,
      isOnSale: true,
      quantityInCart: 0
    },
    {
      id: 2,
      name: 'Producto Agotado',
      imageUrl: '../assets/images/Carruades.png',
      price: 0,
      isOnSale: false,
      quantityInCart: 0
    },
    { 
      id: 3,
      name: 'Cune Ribera del Duero.CRIANZA 2020',
      imageUrl: '../assets/images/Cune.png',
      price: 15,
      isOnSale: true,
      quantityInCart: 0
    }
  ];

  constructor() { }

  updateArticleQuantity(event: { article: Article, quantity: number }) {
    const index = this.articles.findIndex(item => item.id === event.article.id);
    if (index !== -1) {
      this.articles[index].quantityInCart = event.quantity;
    }
  }
}
