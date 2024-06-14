import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../services/article.service';
import { Article } from '../article/article.interface';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html'
})
export class ArticleListComponent implements OnInit {
  searchTerm: string = '';
  articles: Article[] = [];

  constructor(private articleService: ArticleService) {}

  ngOnInit(): void {
    this.loadArticles();
  }

  loadArticles(): void {
    this.articleService.getArticles(this.searchTerm).subscribe(articles => {
      this.articles = articles;
    });
  }

  handleQuantityChange(event: { article: Article, quantity: number }): void {
    const updatedArticle = this.articles.find(a => a.id === event.article.id);
    if (updatedArticle) {
      updatedArticle.quantityInCart = event.quantity;
    }
  }
}
