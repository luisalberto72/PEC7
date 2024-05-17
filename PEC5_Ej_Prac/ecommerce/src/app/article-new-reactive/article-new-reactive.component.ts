import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl, ValidatorFn } from '@angular/forms';

@Component({
  selector: 'app-article-new-reactive',
  templateUrl: './article-new-reactive.component.html',
  styleUrls: ['./article-new-reactive.component.css']
})
export class ArticleNewReactiveComponent implements OnInit {

  articleForm: FormGroup;
  forbiddenNames = ['Prueba', 'Test', 'Mock', 'Fake'];

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.createForm();
  }

  createForm() {
    this.articleForm = this.fb.group({
      name: ['', [Validators.required, this.forbiddenNameValidator()]],
      price: ['', [Validators.required, Validators.min(0.1)]],
      imageUrl: ['', [Validators.required, Validators.pattern('^(http|https):\/\/[a-zA-Z0-9-]+(\.[a-zA-Z0-9]+)+([\/?].*)?$')]],
      isOnSale: [false]
    });
  }

  onSubmit() {
    if (this.articleForm.valid) {
      console.log('Formulario válido');
      console.log('Datos del artículo:', this.articleForm.value);
    } else {
      console.log('Formulario inválido');
    }
  }

  forbiddenNameValidator(): ValidatorFn {
    return (control: FormControl): { [key: string]: any } | null => {
      const forbidden = this.forbiddenNames.includes(control.value);
      return forbidden ? { 'forbiddenName': { value: control.value } } : null;
    };
  }
}
