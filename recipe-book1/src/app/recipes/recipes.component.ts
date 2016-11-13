import { Component, OnInit } from '@angular/core';
import { RecipesListComponent } from './recipes-list';
import { RecipeDetailComponent } from './recipe-detail';
import { Recipemodel } from './recipemodel';

@Component({
  selector: 'rb-recipes',
  templateUrl: './recipes.component.html'
})
export class RecipesComponent implements OnInit {
  selectedRecipe: Recipemodel;
  constructor() { }

  ngOnInit() {
  }

}
