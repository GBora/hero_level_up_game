import { Injectable } from '@angular/core';
import { IGameState } from '../interfaces/gameState.interface';
import { GameStateService } from './game-state.service';
import * as skillsList from '../data/skills.json';
import { ISkill } from '../interfaces/skill.interface';
import { Chance } from 'chance';

@Injectable({
  providedIn: 'root'
})
export class SkillService {

  constructor(private gameStateService: GameStateService) { }

  getSkillOptionsforLevelUp(nrOptions: number): ISkill[] {
    const state: IGameState = this.gameStateService.getGameState();
    const options: ISkill[] = [];
    const skills: ISkill[] = skillsList.skills;
    const skillWeights: number[] = [];
    const chance = new Chance();
    skills.forEach(skill => {
      skillWeights.push(this.getSkillWeight(skill, state));
    });
    while (options.length < nrOptions) {
      const newSkill = chance.weighted(skills, skillWeights);
      const index = options.indexOf(newSkill);
      if (index === -1) {
        options.push(newSkill);
      }
    }
    return options;
  }

  getSkillbyId(id: string): ISkill {
    const skills: ISkill[] = skillsList.skills;
    return skills.find(skill => skill.id === id);
  }

  private getSkillWeight(skill: ISkill, gameState: IGameState): number {
    const heroClass = gameState.heroClass;
    const faction = gameState.heroFaction;
    let weight = skill.chances.base;
    if (skill.type === heroClass.type) {
      weight = weight * 1.25;
    }
    if (skill.chances.classBuff) {
      skill.chances.classBuff.forEach(classBuff => {
        if (classBuff.id === heroClass.id) {
          weight = weight + classBuff.buff;
        }
      });
    }
    if (skill.chances.classDebuff) {
      skill.chances.classDebuff.forEach(classDebuff => {
        if (classDebuff.id === heroClass.id) {
          weight = weight - classDebuff.debuff;
        }
      });
    }
    if (skill.chances.factionBuff) {
      skill.chances.factionBuff.forEach(factionBuff => {
        if (factionBuff.id === faction.id) {
          weight = weight + factionBuff.buff;
        }
      });
    }
    if (skill.chances.factionDebuff) {
      skill.chances.factionDebuff.forEach(factionDebuff => {
        if (factionDebuff.id === faction.id) {
          weight = weight - factionDebuff.debuff;
        }
      });
    }
    if (weight >= 0){
      return weight;
    } else {
      return 0;
    }
  }
}
