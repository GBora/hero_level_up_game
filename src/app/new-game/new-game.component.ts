import { Component, OnInit } from '@angular/core';
import { IFaction } from '../interfaces/faction.interface';
import { IHeroClass } from '../interfaces/heroClass.interface';
import { FactionService } from '../services/faction.service';
import { GameRouterService } from '../services/game-router.service';
import { GameStateService } from '../services/game-state.service';
import { HeroClassService } from '../services/hero-class.service';

@Component({
  selector: 'app-new-game',
  templateUrl: './new-game.component.html',
  styleUrls: ['./new-game.component.scss']
})
export class NewGameComponent implements OnInit {

  factions: IFaction[] = [];
  selectedFaction: IFaction = null;
  availableClasses: IHeroClass[] = [];
  selectedClass: IHeroClass = null;
  heroName: string = null;

  constructor(private factionService: FactionService,
              private heroClassService: HeroClassService,
              private gameStateService: GameStateService,
              private gameRouterService: GameRouterService) { }

  ngOnInit(): void {
    this.factions = this.factionService.getAllFactions();
  }

  factionSelected(): void {
    this.availableClasses = this.heroClassService.getClassesByFactionId(this.selectedFaction.id);
  }

  createHero(): void {
    this.gameStateService.createNewGame(this.heroName, this.selectedFaction, this.selectedClass);
    this.gameRouterService.goNext();
  }
}
