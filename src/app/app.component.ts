import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app works!';
  aragorn = {
    nom: "Aragorn",
    age: 85,
    armes: ["durandil","hache","dard"]
  };
}
