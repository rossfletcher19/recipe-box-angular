export class Recipe {
  constructor (public recipeTitle: string, public course: string, public coast: string, public description: string, public ingredients: [string], public directions: [string], public date: string, public recipeId: number) { }
}
