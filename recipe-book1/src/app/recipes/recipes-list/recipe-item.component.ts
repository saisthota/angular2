import { Component, OnInit, Input } from '@angular/core';
import { Recipemodel } from '../recipemodel'

@Component({
  selector: 'rb-recipe-item',
  templateUrl: './recipe-item.component.html'
})

export class RecipeItemComponent implements OnInit {

  @Input() recipeNew: Recipemodel;

  recipeId: number;

  constructor() { }

  ngOnInit() {
  }

}
