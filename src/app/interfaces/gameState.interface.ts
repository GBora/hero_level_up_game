import { IEnemy } from './enemy.interface';
import { IFaction } from './faction.interface';
import { IHeroClass } from './heroClass.interface';
import { ISkill } from './skill.interface';

export interface IGameState {
    heroName: string;
    heroClass: IHeroClass;
    heroFaction: IFaction;
    level: number;
    levelUps: number;
    gold: number;
    troops: number;
    attack: number;
    defense: number;
    spellPower: number;
    knowledge: number;
    id: string;
    skills: ISkill[];
    enemy: IEnemy;
}
