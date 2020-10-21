import { Injectable } from "@angular/core";
import { Recipe } from "./recipe.model";

@Injectable({
  providedIn: "root",
})
export class RecipesService {
  private recipes: Recipe[] = [
    {
      id: "r1",
      title: "Schnitzel",
      imageUrl: "https://toriavey.com/images/2011/02/TOA20_03-740x740.jpg",
      ingredients: ["French Fries", "Pork Meat", "Salad"],
    },
    {
      id: "r2",
      title: "Spagetti",
      imageUrl:
        "https://thecozycook.com/wp-content/uploads/2019/08/Bolognese-Sauce-500x500.jpg",
      ingredients: ["Spagetti", "Meat", "Tomatoes"],
    },
  ];

  constructor() {}

  getAllRecipes() {
    return [...this.recipes];
  }

  getRecipe(recipeId: string) {
    return {
      ...this.recipes.find((recipe) => {
        return recipe.id === recipeId;
      }),
    };
  }

  deleteRecipe(recipeId: string) {
    this.recipes = this.recipes.filter((recipe) => {
      return recipe.id !== recipeId;
    });
  }
}
