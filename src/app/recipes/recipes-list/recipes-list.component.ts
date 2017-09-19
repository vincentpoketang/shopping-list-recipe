import { Component, OnInit } from '@angular/core';
import {Recipe} from '../recipe.model';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('test recipe', 'simple test', 'https://static.pexels.com/photos/70497/pexels-photo-70497.jpeg'),
    new Recipe('test recipe', 'simple test', 'https://static.pexels.com/photos/70497/pexels-photo-70497.jpeg')
  ];

  constructor() { }

  ngOnInit() {
  }

}
