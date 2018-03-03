import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../recipe.model';
import { Router } from '@angular/router';
import { RecipeService } from '../recipe.service';
import { FirebaseListObservable } from 'angularfire2/database';



@Component({
  selector: 'app-recipebox-home',
  templateUrl: './recipebox-home.component.html',
  styleUrls: ['./recipebox-home.component.css'],
  providers: [RecipeService]
})
export class RecipeboxHomeComponent implements OnInit {
  recipes: FirebaseListObservable<any[]>;

  constructor(private router: Router, private recipeService: RecipeService) { }



  ngOnInit() {
    this.recipes = this.recipeService.getRecipes();
  }

  goToDetailPage(clickedRecipe: Recipe) {
     this.router.navigate(['recipes', clickedRecipe.recipeId]);
   };

}
