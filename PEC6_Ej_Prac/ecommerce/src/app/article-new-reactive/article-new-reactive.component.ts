
import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Article } from '../article/article.interface';
import { ArticleService } from '../services/article.service';

@Component({
  selector: 'app-article-new-reactive',
  templateUrl: './article-new-reactive.component.html',
  styleUrls: ['./article-new-reactive.component.css']
})
export class ArticleNewReactiveComponent {
  articleForm: FormGroup;

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

  onSubmit(): void {
    if (this.articleForm.valid) {
      const newArticle: Article = this.articleForm.value;
      this.articleService.create(newArticle).subscribe(() => {
        console.log('Artículo creado exitosamente');
        this.articleForm.reset(); 
      });
    } else {
      console.log('Formulario inválido');
    }
  }
}

