import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../recipe.model';
import { Router } from '@angular/router';
import { RecipeService } from '../recipe.service';
import { FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-westcoast-recipebox',
  templateUrl: './westcoast-recipebox.component.html',
  styleUrls: ['./westcoast-recipebox.component.css'],
  providers: [RecipeService]
})
export class WestcoastRecipeboxComponent implements OnInit {
  recipes: FirebaseListObservable<any[]>;

  constructor(private router: Router, private recipeService: RecipeService) { }

  ngOnInit() {
    this.recipes = this.recipeService.getRecipes();
  }

  goToDetailPageWest(clickedRecipe) {
     this.router.navigate(['recipes', clickedRecipe.$key]);
   };

}
