import { Component, OnInit } from '@angular/core';
import { IGameState } from '../interfaces/gameState.interface';
import { GameStateService } from '../services/game-state.service';

@Component({
  selector: 'app-battle',
  templateUrl: './battle.component.html',
  styleUrls: ['./battle.component.scss']
})
export class BattleComponent implements OnInit {

  gameState: IGameState;

  constructor(private gameStateService: GameStateService) { }

  ngOnInit(): void {
    this.gameState = this.gameStateService.getGameState();
  }

}
