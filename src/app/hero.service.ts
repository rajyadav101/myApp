import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock-heros';
@Injectable()
export class HeroService {

  constructor() { }
  getHeroes(): Hero[] {
  return HEROES;
}
 
}
