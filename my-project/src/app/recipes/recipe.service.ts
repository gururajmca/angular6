import {EventEmitter, Injectable} from '@angular/core';
import { Recipe } from './recipe.model';
import {Ingredient} from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
 recipeSelected = new EventEmitter<Recipe>();
  private recipes: Recipe[] = [
    new Recipe(
      "Lemon cake",
      "Gluten Drizzle Lemon cake",
      "../assets/img/cake_lemon.jpeg",
      [
        new Ingredient("Lemon", 2),
        new Ingredient("Buns", 1),
      ]),
    new Recipe(
      "Fresh Carrot Cake",
      "Dry Carrot cake with white cream",
      "../assets/img/cake_carrot.jpeg",
      [
        new Ingredient("Carrot", 2),
        new Ingredient("Buns", 1),
        new Ingredient("Cream", 1),
      ]),
    new Recipe(
      "Soft cream chocalate cake",
      "Gluten chocalatecake",
      "../assets/img/cake_chocalate.jpeg",
      [
        new Ingredient("Chocalate", 2),
        new Ingredient("Buns", 1)
      ])
  ];

  constructor(private shoppingListService: ShoppingListService) {}

  getRecipes() {
    return this.recipes.slice();
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredients(ingredients);
  }
}
