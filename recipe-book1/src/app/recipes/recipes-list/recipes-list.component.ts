import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipemodel } from '../recipemodel';
import { RecipeItemComponent } from './recipe-item.component';

@Component({
  selector: 'rb-recipes-list',
  templateUrl: './recipes-list.component.html'
})

export class RecipesListComponent implements OnInit {

  recipes: Recipemodel[] = [];
  @Output() recipeSelected = new EventEmitter<Recipemodel>();

  recipeNew = new Recipemodel('Sunflower', 'Sunflowers', 'http://images.wisegeek.com/sunflower.jpg');

  constructor() { }

  ngOnInit() {
  }

  onSelected(recipeS: Recipemodel) {
    this.recipeSelected.emit(recipeS);
  }

}
