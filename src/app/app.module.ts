import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { RecipeboxHomeComponent } from './recipebox-home/recipebox-home.component';
import { routing } from './app.routing';
import { AboutComponent } from './about/about.component';
import { EastcoastRecipeboxComponent } from './eastcoast-recipebox/eastcoast-recipebox.component';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
import { CoastPipe } from './coast.pipe';


@NgModule({
  declarations: [
    AppComponent,
    RecipeboxHomeComponent,
    AboutComponent,
    EastcoastRecipeboxComponent,
    RecipeDetailComponent,
    CoastPipe
  ],
  imports: [
    BrowserModule,
    routing

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
