import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  isAuth = false;

  lastDate = new Date();
  appareils = [
    {
      name: 'Television',
      status: 'off'
    },
    {
      name: 'Machine a laver',
      status: 'on'
    },
    {
      name: 'Ordinateur',
      status: 'off'
    },
  ]
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
