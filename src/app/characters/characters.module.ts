import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CharactersLandingComponent } from './components/characters-landing/characters-landing.component';
import {CharactersRoutingModule} from 'src/app/characters/characters.routing.module';
import { CharacterDetailsComponent } from './components/character-details/character-details.component';
import { CharacterCardComponent } from './components/character-card/character-card.component';
import {SharedModule} from 'src/app/shared/shared.module';
import { CharacterSearchComponent } from './components/character-search/character-search.component';

@NgModule({
  declarations: [CharactersLandingComponent, CharacterDetailsComponent, CharacterCardComponent, CharacterSearchComponent],
  imports: [
    CommonModule,
    CharactersRoutingModule,
    SharedModule
  ]
})
export class CharactersModule { }
