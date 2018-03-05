import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../recipe.model';
import { Router } from '@angular/router';
import { RecipeService } from '../recipe.service';
import { FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-eastcoast-recipebox',
  templateUrl: './eastcoast-recipebox.component.html',
  styleUrls: ['./eastcoast-recipebox.component.css'],
  providers: [RecipeService]
})
export class EastcoastRecipeboxComponent implements OnInit {
  recipes: FirebaseListObservable<any[]>;

  constructor(private router: Router, private recipeService: RecipeService) {}
  coast: string;
  filters = {}
// new Recipe("recipeTitle", "course", "coast", "description", [ing], [di], "date", id)


  ngOnInit() {
    this.recipes = this.recipeService.getRecipes();
    
  }

  goToDetailPage(clickedRecipe) {
     this.router.navigate(['recipes', clickedRecipe.$key]);
   };


}
