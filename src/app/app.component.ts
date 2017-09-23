import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  loadedFeature = 'recipe';

  ngOnInit() {
    firebase.initializeApp({
      apiKey: "AIzaSyDKS45aCFnJ5qOUsfOcVlCd2i3juPl806E",
      authDomain: "ng-recipes-298be.firebaseapp.com"
    });

  }

  onNavigate(feature: string) {
    this.loadedFeature = feature;
  }
}
