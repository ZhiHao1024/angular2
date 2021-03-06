import { Component, OnInit } from '@angular/core';
import { Hero } from '../model/hero/hero';
import {HeroService} from '../service/hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  heroes:Hero[];

  constructor(private heroService:HeroService) {
  }

  ngOnInit() {
    this.getHeroes();
  }

  getHeroes():void {
    this.heroService.getHeroes().then(heroes => this.heroes = heroes);
  }

}
