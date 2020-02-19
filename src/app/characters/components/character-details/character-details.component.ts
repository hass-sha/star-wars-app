import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Character} from 'src/app/core/models/common.model';
import {Observable, of} from 'rxjs';
import {catchError, tap} from 'rxjs/operators';
import {CharacterService} from 'src/app/shared/services/character.service';
import {NgxSpinnerService} from 'ngx-spinner';

@Component({
  selector: 'app-character-details',
  templateUrl: './character-details.component.html',
  styleUrls: ['./character-details.component.scss']
})
export class CharacterDetailsComponent implements OnInit {
  id: number;
  character$: Observable<Character | boolean>;
  character: Character;
  error: string;

  constructor(private route: ActivatedRoute,
              private characterService: CharacterService,
              private spinner: NgxSpinnerService) { }

  ngOnInit(): void {
    this.spinner.show();
    this.route.params.subscribe((params) => {
      this.id = params.id;
    });

    this.character$ = this.characterService.getCharacter(this.id)
      .pipe(tap((response: Character) => {
        this.character = response;
        this.spinner.hide();
      }),
        catchError((error) => {
          this.error = error;
          this.spinner.hide();
          return of(false);
        })
      );
  }

}
