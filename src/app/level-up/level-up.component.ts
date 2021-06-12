import { Component, OnInit } from '@angular/core';
import { IGameState } from '../interfaces/gameState.interface';
import { GameStateService } from '../services/game-state.service';

@Component({
  selector: 'app-level-up',
  templateUrl: './level-up.component.html',
  styleUrls: ['./level-up.component.scss']
})
export class LevelUpComponent implements OnInit {

  gameState: IGameState;

  constructor(private gameStateService: GameStateService) { }

  ngOnInit(): void {
    this.gameState = this.gameStateService.getGameState();
  }

}
