import { Component,Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-appareil',
  templateUrl: './appareil.component.html',
  styleUrls: ['./appareil.component.css']
})
export class AppareilComponent implements OnInit {

  @Input() appareilName!: string;
  @Input() status!: string;

  constructor() { }

  ngOnInit(): void {
  }

  getStatus(): string {
    return this.status;
  }

  getColor(): string {
    return this.status === 'on' ? "green" : "red";
  }
}
