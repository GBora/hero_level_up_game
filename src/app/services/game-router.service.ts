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
    }
  }
}
