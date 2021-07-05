import { Component, OnInit } from '@angular/core';
import { IGameState } from '../interfaces/gameState.interface';
import { ISkill } from '../interfaces/skill.interface';
import { GameRouterService } from '../services/game-router.service';
import { GameStateService } from '../services/game-state.service';
import { SkillService } from '../services/skill.service';


@Component({
  selector: 'app-level-up',
  templateUrl: './level-up.component.html',
  styleUrls: ['./level-up.component.scss']
})
export class LevelUpComponent implements OnInit {

  gameState: IGameState;
  defaultSkills: ISkill[] = [];
  options: ISkill[] = [];
  selectedSkill: ISkill = null;

  constructor(private gameStateService: GameStateService,
              private skillsService: SkillService,
              private gameRouterService: GameRouterService) { }

  initOptions(): void {
    this.gameState = this.gameStateService.getGameState();
    // Load the default skills only at level 1
    if (this.gameState.level === 1) {
      this.gameState.heroClass.defaultSkills.forEach(id => {
        const defaultSkill = this.skillsService.getSkillbyId(id);
        this.defaultSkills.push(defaultSkill);
        this.gameState.skills.push(defaultSkill);
      });
    } else {
      this.defaultSkills = [];
    }
    this.options = this.skillsService.getSkillOptionsforLevelUp(3);
    this.gameStateService.save(this.gameState);
  }

  ngOnInit(): void {
    this.initOptions();
  }

  skillChanged(id: string) {
    this.selectedSkill = this.options.find(s => s.id === id);
  }

  acceptOption(): void {
    // TODO get selected option add it to skills save
    this.gameState.levelUps--;
    this.gameState.skills.push(this.selectedSkill);
    this.gameState.level++;
    this.gameStateService.save(this.gameState);
    this.initOptions();
    this.gameRouterService.goNext();
  }

}
