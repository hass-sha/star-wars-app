import { Component, OnInit } from '@angular/core';
import {Character} from 'src/app/core/models/common.model';
import {data} from 'src/assets/data/characters';

@Component({
  selector: 'app-characters-landing',
  templateUrl: './characters-landing.component.html',
  styleUrls: ['./characters-landing.component.scss']
})
export class CharactersLandingComponent implements OnInit {
  characters: Array<Partial<Character>> = data.characters;

  constructor() { }

  ngOnInit(): void {
  }

}
