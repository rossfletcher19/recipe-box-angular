import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css'],
  providers: [RecipeService]
})
export class RecipeDetailComponent implements OnInit {
  recipeId: number;
  recipeToDisplay: Recipe;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private recipeService: RecipeService
  ) { }

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.recipeId = parseInt(urlParameters['id']);
    });
      this.recipeToDisplay = this.recipeService.getRecipeById(this.recipeId);
  }

}
