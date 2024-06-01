import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  showArticleListFlag: boolean = true;
  showArticleNewTemplateFlag: boolean = false;
  showArticleNewReactiveFlag: boolean = false;

  constructor() { }

  showArticleList() {
    this.showArticleListFlag = true;
    this.showArticleNewTemplateFlag = false;
    this.showArticleNewReactiveFlag = false;
  }

  showArticleNewTemplate() {
    this.showArticleListFlag = false;
    this.showArticleNewTemplateFlag = true;
    this.showArticleNewReactiveFlag = false;
  }

  showArticleNewReactive() {
    this.showArticleListFlag = false;
    this.showArticleNewTemplateFlag = false;
    this.showArticleNewReactiveFlag = true;
  }
}
