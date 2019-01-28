import { Component, OnInit } from '@angular/core';
import{Ingredient} from '../Shared/ingredient.model';
@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
ingrediants:Ingredient[]=[
  new Ingredient('Apple',5),
  new Ingredient('Orange',10),
  new Ingredient('Grapes',15),
];
  constructor() { }

  ngOnInit() {
  }
  onIngredientAdded(ingredient:Ingredient){
this.ingrediants.push(ingredient);
  }
}
