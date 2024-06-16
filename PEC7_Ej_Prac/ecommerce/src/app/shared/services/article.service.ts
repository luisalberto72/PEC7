import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {
  
  private apiUrl = 'http://localhost:3000/api/articles';

  constructor(private http: HttpClient) {}

  getArticles(query?: string): Observable<any[]> {
    let url = this.apiUrl;
    if (query) {
      url += `?q=${query}`;
    }
    return this.http.get<any[]>(url);
  }

  addArticle(article: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, article);
  }

  updateArticleQuantity(id: number, changeInQuantity: number): Observable<any> {
    return this.http.patch<any>(`${this.apiUrl}/${id}`, { changeInQuantity });
  }

  getArticleById(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }
}
