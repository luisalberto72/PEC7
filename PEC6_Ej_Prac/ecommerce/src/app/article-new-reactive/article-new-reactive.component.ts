import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Article } from '../article/article.interface';
import { ArticleService } from '../services/article.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-article-new-reactive',
  templateUrl: './article-new-reactive.component.html',
  styleUrls: ['./article-new-reactive.component.css']
})
export class ArticleNewReactiveComponent {
  articleForm: FormGroup;
  createArticle$: Observable<any>; // Cambiar el tipo de Observable según lo que devuelva articleService.create()

  constructor(
    private formBuilder: FormBuilder,
    private articleService: ArticleService
  ) {
    this.articleForm = this.formBuilder.group({
      name: ['', Validators.required],
      imageUrl: ['', [Validators.required, Validators.pattern(/https?:\/\/.+\.(jpg|jpeg|png|gif)$/i)]],
      price: [0, [Validators.required, Validators.min(0.1)]],
      isOnSale: [false],
      quantityInCart: [0, [Validators.required, Validators.min(0)]]
    });
  }

  onSubmit(): Observable<any> { // Devolver Observable
    if (this.articleForm.valid) {
      const newArticle: Article = this.articleForm.value;
      return this.articleService.create(newArticle); // Devolver el observable directamente
    }
    return null; // Devolver null si el formulario no es válido
  }
}
