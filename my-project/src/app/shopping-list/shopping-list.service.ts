import {Ingredient} from '../shared/ingredient.model';
import {EventEmitter} from '@angular/core';
export class ShoppingListService {

  onIngredientChanged = new EventEmitter<Ingredient[]>();
  private ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10),
  ];

  getIngredients() {
    return this.ingredients.slice();
  }

  addIngredients(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.onIngredientChanged.emit(this.ingredients.slice());
  }
}
