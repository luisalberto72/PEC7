
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component'; // Importar el componente NavbarComponent

import { SharedModule } from './shared/shared.module'; // Importa el módulo compartido
import { ArticleModule } from './article/article.module'; // Importa el módulo de artículos

import { HttpClientModule, provideHttpClient, withFetch } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    ArticleModule,
    HttpClientModule // Agrega HttpClientModule 
  ],
  providers: [
    provideHttpClient(withFetch()) // Configurar HttpClient para usar fetch
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
