import { Injectable } from '@angular/core';
import { IEnemy } from '../interfaces/enemy.interface';
import * as enemyList from '../data/enemies.json';
import { Chance } from 'chance';

@Injectable({
  providedIn: 'root'
})
export class EnemyService {

  constructor() { }

  getRandomStat(): string {
    const chance = new Chance();
    return chance.pickone(['attack', 'defense', 'knowledge', 'spellPower']);
  }

  getNewEnemy(): IEnemy {
    const chance = new Chance();

    const enemy: IEnemy = {
      name: '',
      conditions: []
    };

    enemy.name = chance.pickone(enemyList.enemies);

    for (let i = 0; i < 2; i++) {
      enemy.conditions.push({ stat:  this.getRandomStat(), value: 1 });
    }

    enemy.conditions.push({ stat:  'troops' , value: 100 });

    return enemy;
  }
}
