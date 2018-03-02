import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RecipeboxHomeComponent } from './recipebox-home/recipebox-home.component';
import { AboutComponent } from './about/about.component';
import { EastcoastRecipeboxComponent } from './eastcoast-recipebox/eastcoast-recipebox.component';

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
}
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
