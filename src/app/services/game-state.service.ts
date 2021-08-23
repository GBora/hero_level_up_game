import { Injectable } from '@angular/core';
import { IFaction } from '../interfaces/faction.interface';
import { IGameState } from '../interfaces/gameState.interface';
import { IHeroClass } from '../interfaces/heroClass.interface';
import { EnemyService } from './enemy.service';

@Injectable({
  providedIn: 'root'
})
export class GameStateService {

  private localStorageKey = 'hlg-state';

  constructor(private enemyService: EnemyService) { }

  save(newState: IGameState): void {
    localStorage.setItem(this.localStorageKey, JSON.stringify(newState));
  }

  private read(): IGameState {
    try {
      const raw = localStorage.getItem(this.localStorageKey);
      return JSON.parse(raw) as IGameState;
    } catch (err) {
      console.error(err);
    }
  }

  createNewGame(heroName: string, heroFaction: IFaction, heroClass: IHeroClass): void {
    const newState: IGameState = {
      heroName,
      heroClass,
      heroFaction,
      level: 1,
      levelUps: 3,
      gold: 0,
      troops: 50,
      id: Math.random() + heroName.trim() + Date.now(),
      attack: 1,
      defense: 1,
      knowledge: 1,
      spellPower: 1,
      skills: [],
      enemy: this.enemyService.getNewEnemy()
    };
    this.save(newState);
  }

  getGameState(): IGameState {
    return this.read();
  }
}
