import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  isAuth = false;

  appareilOne = "Televisions";
  appareilTwo = "Ordinateur";
  appareilThree = "Machine a laver";
  
  constructor() {
    setTimeout(() =>{
      this.isAuth = true;
    }, 4000)
  }

  onAllumer(): void {
    
    console.log("this.isAuth");
  }
}
