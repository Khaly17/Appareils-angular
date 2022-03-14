import { Component,Input, OnInit } from '@angular/core';
import { AppareilService } from '../services/appareil.service';

@Component({
  selector: 'app-appareil',
  templateUrl: './appareil.component.html',
  styleUrls: ['./appareil.component.css']
})
export class AppareilComponent implements OnInit {

  @Input() appareilName!: string;
  @Input() status!: string;
  @Input() indexOfAppareil!: number;

  constructor(private appareilService: AppareilService) { }

  ngOnInit(): void {
  }

  getStatus(): string {
    return this.status;
  }

  getColor(): string {
    return this.status === 'on' ? "green" : "red";
  }

  onSwitchOne(): void {
    this.appareilService.switchOnOne(this.indexOfAppareil)
  }

  onSwitchOff(): void {
    this.appareilService.switchOffOne(this.indexOfAppareil)
  }
}
