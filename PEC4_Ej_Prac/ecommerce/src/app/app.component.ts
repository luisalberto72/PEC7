import { Component } from '@angular/core';
import { Article } from './article/article.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  title = 'ecommerce';

  articles: Article[] = [
    {
      name: 'Vino Rioja Ramón bilbao',
      imageUrl: '../assets/images/Bilbao.png',
      price: 56.70,
      isOnSale: true,
      quantityInCart: 0
    },
    {
      name: 'Producto Agotado',
      imageUrl: '../assets/images/Carruades.png',
      price: 0,
      isOnSale: false,
      quantityInCart: 0
    }
  ];
}


