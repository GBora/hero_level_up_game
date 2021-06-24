import { Component, OnInit } from '@angular/core';
import { IGameState } from '../interfaces/gameState.interface';
import { GameStateService } from '../services/game-state.service';
import { SkillService } from '../services/skill.service';

@Component({
  selector: 'app-level-up',
  templateUrl: './level-up.component.html',
  styleUrls: ['./level-up.component.scss']
})
export class LevelUpComponent implements OnInit {

  gameState: IGameState;

  constructor(private gameStateService: GameStateService,
              private skillsService: SkillService) { }

  ngOnInit(): void {
    this.gameState = this.gameStateService.getGameState();
    console.log(this.skillsService.getSkillOptionsforLevelUp(3));
  }

}
