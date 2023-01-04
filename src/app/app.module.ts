import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BlogFormComponent } from './blog-form/blog-form.component';
import { ArticleFormComponent } from './article-form/article-form.component';
import { BlogService } from './blog.service';

@NgModule({
  declarations: [
    AppComponent,
    BlogFormComponent,
    ArticleFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [BlogService],
  bootstrap: [AppComponent]
})
export class AppModule { }
