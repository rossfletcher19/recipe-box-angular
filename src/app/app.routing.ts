import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RecipeboxHomeComponent } from './recipebox-home/recipebox-home.component';

const appRoutes: Routes = [
{
  path: '',
  component: RecipeboxHomeComponent
}
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
