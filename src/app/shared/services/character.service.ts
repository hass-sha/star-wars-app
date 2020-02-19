import { Injectable } from '@angular/core';
import {Constants} from 'src/app/core/constants/constants';
import {environment} from 'src/environments/environment';
import {Character} from 'src/app/core/models/common.model';
import {HttpService} from 'src/app/core/services/http/http.service';
import {Observable} from 'rxjs';
import {tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {
  characterApi = environment.urls.baseUrl + Constants.api.person;

  constructor(private httpService: HttpService) { }

  public getCharacter(id: number): Observable<Character> {
    const url = this.characterApi + id;
    return this.httpService.get(url).pipe(tap((response) => {
      if (response.error) {
        throw response.message;
      }
    }));
  }
}
