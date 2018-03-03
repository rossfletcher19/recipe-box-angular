import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RecipeboxHomeComponent } from './recipebox-home/recipebox-home.component';
import { AboutComponent } from './about/about.component';
import { EastcoastRecipeboxComponent } from './eastcoast-recipebox/eastcoast-recipebox.component';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
import { WestcoastRecipeboxComponent } from './westcoast-recipebox/westcoast-recipebox.component';


const appRoutes: Routes = [
{
  path: '',
  component: RecipeboxHomeComponent
},
{
  path: 'about',
  component: AboutComponent
},
{
  path: 'eastcoast-recipebox',
  component: EastcoastRecipeboxComponent
},
{
  path: 'westcoast-recipebox',
  component: WestcoastRecipeboxComponent
},
{
  path: 'recipes/:id',
  component: RecipeDetailComponent
}
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
