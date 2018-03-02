import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { RecipeboxHomeComponent } from './recipebox-home/recipebox-home.component';


@NgModule({
  declarations: [
    AppComponent,
    RecipeboxHomeComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
