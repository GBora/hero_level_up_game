import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { IGameState } from '../interfaces/gameState.interface';
import { GameStateService } from './game-state.service';

@Injectable({
  providedIn: 'root'
})
export class GameRouterService {

  constructor(private gameStateService: GameStateService,
              private router: Router) { }

  goNext() {
    const state: IGameState = this.gameStateService.getGameState();
    // If player has levelups attempt get them to the level up screen
    if (state.levelUps > 0) {
      this.router.navigate(['level-up']);
    } else {
      // TODO: write up condition to send them to marketplace or town
      if (state.gold >= 100) {
        const ran = Math.random();
        if (ran <= 0.4) {
          this.router.navigate(['marketplace']);
        } else {
          this.router.navigate(['battle']);
        }
      } else {
        this.router.navigate(['battle']);
      }
    }

  }
}
