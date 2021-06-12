import { IFaction } from './faction.interface';
import { IHeroClass } from './heroClass.interface';

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
}
