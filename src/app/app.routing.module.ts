import {NgModule} from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';
import {HomeComponent} from 'src/app/core/components/home/home.component';

const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'characters', loadChildren: () => import('./characters/characters.module').then(m => m.CharactersModule)}
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes, {preloadingStrategy: PreloadAllModules})
  ],
  exports: [RouterModule]
})

export class AppRoutingModule {

}
