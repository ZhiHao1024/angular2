import { Injectable } from '@angular/core';
import {Hero} from '../model/hero/hero';
import {HEROES} from '../../assets/mock-heroes'
import {MessageService} from './message.service';

@Injectable()
export class HeroService {
  constructor(private messageService:MessageService) {
  }

  getHeroes():Promise<Hero[]> {
    return Promise.resolve(HEROES);
  }

  getHero(id:number):Promise<Hero> {
    this.messageService.add(`HeroService: fetched hero id=${id}`);
    return Promise.resolve(HEROES.find(hero => hero.id === id));
  }

  private log(message:string) {
    this.messageService.add('HeroService: ' + message);
  }
}
