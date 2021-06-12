import { Injectable } from '@angular/core';
import { IFaction } from '../interfaces/faction.interface';
import * as factionList from '../data/factions.json';

@Injectable({
  providedIn: 'root'
})
export class FactionService {

  constructor() { }

  getAllFactions():IFaction[] {
    return factionList.factions;
  }
}
