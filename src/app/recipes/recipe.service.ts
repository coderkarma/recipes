import { EventEmitter, Injectable } from "@angular/core";
import { Recipe } from "./recipe.model";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();
  private recipes: Recipe[] = [
    new Recipe(
      "A Burger",
      "A Tasty Burger",
      "https://i.pinimg.com/474x/b0/62/53/b06253c4792ddefd0b5b06ace973de31--popular-photography-burgers.jpg",
      [new Ingredient("Meat", 1), new Ingredient("French Fires", 20)]
    ),
    new Recipe(
      "Giant Burger",
      "Delicious",
      "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/beyond-burger-nutrition-and-ingredients-1569351590.jpg?crop=0.752xw:1.00xh;0.107xw,0&resize=480:*",
      [new Ingredient("Buns", 2), new Ingredient("Meat", 1)]
    )
  ];

  constructor( private slService: ShoppingListService){

  }
  getRecipes() {
    // use slice to get newArray of recipe, since array is referrenced typed
    return this.recipes.slice();
  }

  addIngredientsToShoppingList (ingredients: Ingredient[]){
   this.slService.addIngredients(ingredients);
  }
}
