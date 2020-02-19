import {Component, Input, OnInit} from '@angular/core';
import {Character} from 'src/app/core/models/common.model';
import {Constants} from 'src/app/core/constants/constants';

@Component({
  selector: 'app-character-card',
  templateUrl: './character-card.component.html',
  styleUrls: ['./character-card.component.scss']
})
export class CharacterCardComponent implements OnInit {
  @Input() character: Partial<Character>;
  imagePath: string;

  constructor() {
  }

  ngOnInit(): void {
    this.imagePath = Constants.characterImagePath + this.character.id + this.character.imageFormat;
  }

}
