import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common'; // Importa CommonModule
import { ArticleItemComponent } from './article/article-item/article-item.component';
import { DefaultImagePipe } from './default-image.pipe'; // Importa el pipe si está en este módulo



import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';  
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ArticleListComponent } from './article-list/article-list.component';
import { ArticleNewReactiveComponent } from './article-new-reactive/article-new-reactive.component';
import { ArticleDetailComponent } from './article-detail/article-detail.component';
import { AuthInterceptor } from './services/auth-interceptor.service';
import { AuthGuard } from './guards/auth.guard';
import { AuthService } from './services/auth.service';
import { AuthStoreService } from './services/auth-store.service';
import { ArticleService } from './services/article.service';
import { NavbarComponent } from './navbar/navbar.component'; 

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ArticleListComponent,
    ArticleNewReactiveComponent,
    ArticleDetailComponent,
    NavbarComponent,
    ArticleItemComponent,
    DefaultImagePipe // Declara el pipe  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    CommonModule // Asegúrate de importar CommonModule  
  ],
  providers: [
    AuthService,
    AuthStoreService,
    ArticleService,
    AuthGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
