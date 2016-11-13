import { Component, OnInit, Input } from '@angular/core';
import { Recipemodel } from '../recipemodel'

@Component({
  selector: 'rb-recipe-detail',
  templateUrl: './recipe-detail.component.html'
})
export class RecipeDetailComponent implements OnInit {
  @Input() selectedRecipe: Recipemodel;
  constructor() { }

  ngOnInit() {
  }

}
