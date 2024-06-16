import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ArticleService } from '../../shared/services/article.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-article-new-reactive',
  templateUrl: './article-new-reactive.component.html'
})
export class ArticleNewReactiveComponent {
  articleForm: FormGroup;
  successMessage2: string | null = null;

  constructor(
    private fb: FormBuilder,
    private articleService: ArticleService,
    private router: Router
  ) {
    this.articleForm = this.fb.group({
      name: ['', Validators.required],
      imageUrl: [''],
      price: [0, Validators.required],
      isOnSale: [false],
      quantityInCart: [0]
    });
  }

  onSubmit() {
    if (this.articleForm.valid) {
      this.articleService.addArticle(this.articleForm.value).subscribe(response => {
        this.successMessage2 = 'Created Article';
        this.router.navigate(['/article/create']);
      });
    }
  }
}
