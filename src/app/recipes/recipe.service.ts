import {Recipe} from './recipe.model';
import { Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {

  private recipes: Recipe[] = [
    new Recipe('Pizza',
      'It\'s just pizza',
      'https://static.pexels.com/photos/2232/vegetables-italian-pizza-restaurant.jpg',
      [
        new Ingredient('Cheese', 10),
        new Ingredient('Dough', 2),
        new Ingredient('Sausage', 14)
      ]
    ),
    new Recipe('Hamburger',
      'I like hamburger',
      'https://az616578.vo.msecnd.net/files/2016/03/12/6359341695309050372083788656_fast%20food.jpg',
      [
        new Ingredient('Bun', 2),
        new Ingredient('Cheese', 1),
        new Ingredient('Meat', 1)
      ]
    )
  ];

  constructor(private slService: ShoppingListService){}

  getRecipes(){
    return this.recipes.slice();
  }

  getRecipe(index: number) {
    return this.recipes[index];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]){
    this.slService.addIngredients(ingredients);
  }
}
