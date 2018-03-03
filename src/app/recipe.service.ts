import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model';
import { RECIPES } from './mock-recipes';

@Injectable()
export class RecipeService {

  constructor() { }

  getRecipes() {
    return RECIPES;
  }

  getRecipeById(recipeId: number){
    for (var i = 0; i <= RECIPES.length - 1; i++) {
      if (RECIPES[i].recipeId === recipeId) {
        return RECIPES[i];
      }
    }
  }

}
