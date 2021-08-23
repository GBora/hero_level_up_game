import { Component, Input, OnInit } from '@angular/core';
import { IEnemy } from '../interfaces/enemy.interface';

@Component({
  selector: 'app-enemy-description',
  templateUrl: './enemy-description.component.html',
  styleUrls: ['./enemy-description.component.scss']
})
export class EnemyDescriptionComponent implements OnInit {

  @Input() enemy: IEnemy;

  constructor() { }

  ngOnInit(): void {
  }

}
