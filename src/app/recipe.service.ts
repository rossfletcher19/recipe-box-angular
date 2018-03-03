import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model';
import { RECIPES } from './mock-recipes';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class RecipeService {
  recipes: FirebaseListObservable<any[]>;

  constructor(private database: AngularFireDatabase) {
    this.recipes = database.list('recipes');
  }

  getRecipes() {
    return this.recipes;
  }

  getRecipeById(recipeId: number){
    for (var i = 0; i <= RECIPES.length - 1; i++) {
      if (RECIPES[i].recipeId === recipeId) {
        return RECIPES[i];
      }
    }
  }

}
