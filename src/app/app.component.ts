import { Component, OnInit } from '@angular/core';
import {AppareilService} from './services/appareil.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  isAuth = false;

  lastUpdate = new Promise<Date>(
    (resolve, reject) => {
      const date = new Date();
      setTimeout(() => 
        {
          resolve(date);
        }, 2000);
    }
  );
  
  appareils!: any[];

  appareilOne = "Televisions";
  appareilTwo = "Ordinateur";
  appareilThree = "Machine a laver";
  
  constructor(private appareilService: AppareilService) {
    setTimeout(() =>{
      this.isAuth = true;
    }, 4000)
  }

  ngOnInit() {
    this.appareils = this.appareilService.appareils
  }

  onAllumer(): void {
    this.appareilService.switchOnAll()
  }

  offAll(): void {
    this.appareilService.switchOffAll()
  }
 
}
