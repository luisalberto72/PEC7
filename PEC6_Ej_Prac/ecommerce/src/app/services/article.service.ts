
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Article } from '../article/article.interface';

@Injectable({
  providedIn: 'root' // Registrando el servicio en el módulo raíz
})
export class ArticleService {
  //private articles: Article[] = [];

  private apiUrl = 'http://localhost:3000/api/articles';

  constructor(private http: HttpClient) { }

  getArticles(): Observable<Article[]> {
    return this.http.get<Article[]>(this.apiUrl);
  }

  changeQuantity(articleID: number, changeInQuantity: number): Observable<Article> {
    const url = `${this.apiUrl}/${articleID}`;
    return this.http.patch<Article>(url, { changeInQuantity });
  }

  create(article: Article): Observable<any> {
    return this.http.post<any>(this.apiUrl, article);
  }
}