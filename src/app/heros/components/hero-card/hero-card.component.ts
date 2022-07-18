import { Component, Input, OnInit } from '@angular/core';
import { Heros } from '../../interfaces/heros.interface';

@Component({
  selector: 'app-hero-card',
  templateUrl: './hero-card.component.html',
  styles: [
  ]
})
export class HeroCardComponent implements OnInit {

  @Input() hero! : Heros;
  constructor() { }

  ngOnInit(): void {
  }

}
