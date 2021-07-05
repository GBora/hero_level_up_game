import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BattleComponent } from './battle/battle.component';
import { LevelUpComponent } from './level-up/level-up.component';
import { MarketplaceComponent } from './marketplace/marketplace.component';
import { NewGameComponent } from './new-game/new-game.component';
import { TownComponent } from './town/town.component';


const routes: Routes = [
  { path: 'new-game', component: NewGameComponent },
  { path: 'level-up', component: LevelUpComponent },
  { path: 'marketplace', component: MarketplaceComponent },
  { path: 'town', component: TownComponent },
  { path: 'battle', component: BattleComponent },
  { path: '', redirectTo: '/new-game', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
