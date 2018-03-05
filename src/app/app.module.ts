import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { RecipeboxHomeComponent } from './recipebox-home/recipebox-home.component';
import { routing } from './app.routing';
import { AboutComponent } from './about/about.component';
import { EastcoastRecipeboxComponent } from './eastcoast-recipebox/eastcoast-recipebox.component';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
import { CoastPipe } from './coast.pipe';

import { masterFirebaseConfig } from './api-keys';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { WestcoastRecipeboxComponent } from './westcoast-recipebox/westcoast-recipebox.component';
import { AdminComponent } from './admin/admin.component';

export const firebaseConfig = {
  apiKey: masterFirebaseConfig.apiKey,
  authDomain: masterFirebaseConfig.authDomain,
  databaseURL: masterFirebaseConfig.databaseURL,
  storageBucket: masterFirebaseConfig.storageBucket
};

@NgModule({
  declarations: [
    AppComponent,
    RecipeboxHomeComponent,
    AboutComponent,
    EastcoastRecipeboxComponent,
    RecipeDetailComponent,
    WestcoastRecipeboxComponent,
    CoastPipe,
    AdminComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
