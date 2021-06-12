import { Injectable } from '@angular/core';
import { IHeroClass } from '../interfaces/heroClass.interface';
import * as classList from '../data/classes.json';

@Injectable({
  providedIn: 'root'
})
export class HeroClassService {

  constructor() { }

  getAllClasses(): IHeroClass[] {
    return classList.classes;
  }

  getClassesByFactionId(id: string): IHeroClass[] {
    return classList.classes.filter(c => c.factions.includes(id));
  }
}
