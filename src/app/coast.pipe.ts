import { Pipe, PipeTransform, Injectable } from '@angular/core';
import { Recipe } from './recipe.model';
import { EastcoastRecipeboxComponent } from './eastcoast-recipebox/eastcoast-recipebox.component';
import { WestcoastRecipeboxComponent } from './westcoast-recipebox/westcoast-recipebox.component';

@Pipe({
  name: 'coast',
  pure: false
})
export class CoastPipe implements PipeTransform {


  transform(input) {
    var output: Recipe[] = [];
    for (var i = 0; i < input.length; i++) {
      if (input[i].coast === "east") {
        output.push(input[i])
      } else if (input[i].coast === "west") {
        output.push(input[i]);
      }
    }
    return output;

  }

}
