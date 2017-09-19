import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent implements OnInit {

  private myObj = {
    'key1': 'value',
    'keyInt': 10
  };
  private dt: string;
  private money: number = 45;
  private bike: string = 'duccati';

  private prom: Promise<string> = new Promise<string>(
    (res, rej) => setTimeout(() => res(`Got it`), 1500)
  );
  private mobiles = [
    'Aandroid',
    'Apple',
    'Symbian',
    'Windows',
    'Black Berry',
    'Jio',
    'Samsung',
    'Chiana'
  ];

  constructor() { }

  ngOnInit() {
    this.dt = new Date().toString();
  }

  adNwMob(mob: string) {
    this.mobiles.push(mob);
  }
}
