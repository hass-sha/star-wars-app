import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CharactersLandingComponent} from 'src/app/characters/components/characters-landing/characters-landing.component';
import {CharacterDetailsComponent} from 'src/app/characters/components/character-details/character-details.component';

const appRoutes: Routes = [
  {path: '', component: CharactersLandingComponent},
  {path: 'detail/:id', component: CharacterDetailsComponent}
];

@NgModule({
  imports: [
    RouterModule.forChild(appRoutes)
  ],
  exports: [RouterModule]
})

export class CharactersRoutingModule {

}
