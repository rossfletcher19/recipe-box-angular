import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  providers: [RecipeService]
})
export class AdminComponent implements OnInit {
  recipes: FirebaseListObservable<any[]>;

  constructor(private router: Router, private recipeService: RecipeService) { }

  ngOnInit() {
  }

  submitForm(recipeTitle: string, course: string, coast: string, description: string, ingredients: string, directions: string, date: string) {
    let newRecipe: Recipe = new Recipe(recipeTitle, course, coast, description, ingredients, directions, date);
    this.recipeService.addRecipe(newRecipe);
    console.log(newRecipe);
  }

}
