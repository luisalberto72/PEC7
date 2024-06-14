import { Component } from '@angular/core';

@Component({
  selector: 'app-article-new-template',
  templateUrl: './article-new-template.component.html',
  styleUrls: ['./article-new-template.component.css']
})
export class ArticleNewTemplateComponent {

  article: any = {}; // Objeto para almacenar los datos del artículo
  isFormValid: boolean = true;

  constructor() { }

  onSubmit() {
    if (this.isValid()) {
      console.log('Formulario válido');
      console.log('Datos del artículo:', this.article);
    } else {
      console.log('Formulario inválido');
    }
  }

  isValid(): boolean {
    this.isFormValid = true;

    if (!this.article.name || !this.article.price || !this.article.imageUrl) {
      this.isFormValid = false;
    } else {
      // Validación de la URL de la imagen
      const urlPattern = /^(http|https):\/\/[a-zA-Z0-9-]+(\.[a-zA-Z0-9]+)+([\/?].*)?$/;
      if (!urlPattern.test(this.article.imageUrl)) {
        this.isFormValid = false;
      }

      // Validación del precio (numérico)
      if (isNaN(this.article.price)) {
        this.isFormValid = false;
      }
    }

    return this.isFormValid;
  }
}
