import { Component, Input, OnInit } from '@angular/core';
import { ISkill } from '../interfaces/skill.interface';

@Component({
  selector: 'app-skill-description',
  templateUrl: './skill-description.component.html',
  styleUrls: ['./skill-description.component.scss']
})
export class SkillDescriptionComponent implements OnInit {

  constructor() { }

  @Input() skill: ISkill;

  ngOnInit(): void {
  }

}
