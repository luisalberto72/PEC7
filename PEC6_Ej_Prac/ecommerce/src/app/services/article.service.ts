
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Article } from '../article/article.interface';

@Injectable({
  providedIn: 'root' // Registrando el servicio en el módulo raíz
})
export class ArticleService {
  private articles: Article[] = [];

  constructor() { }

  getArticles(): Observable<Article[]> {
    // Aquí va la lógica para obtener los artículos desde una API o cualquier otra fuente de datos
    return of(this.articles);
  }

  changeQuantity(articleID: number, changeInQuantity: number): Observable<Article> {
    // Aquí va la lógica para modificar la cantidad de un artículo específico
    const article = this.articles.find(a => a.id === articleID);
    if (article) {
      article.quantityInCart+= changeInQuantity;
    }
    return of(article);
  }

  create(article: Article): Observable<any> {
    // Aquí va la lógica para crear un nuevo artículo
    this.articles.push(article);
    return of('Artículo creado correctamente');
  }
}