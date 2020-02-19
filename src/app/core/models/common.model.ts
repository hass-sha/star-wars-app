import {Film, Planet, Specie} from 'server/src/models/core.model';

export interface Character {
  name: string;
  height: string;
  mass: string;
  hair_color: string;
  skin_color: string;
  gender: string;
  birth_year: string;
  home_planet?: Partial<Planet>;
  species: Array<Partial<Specie>>;
  films: Array<Partial<Film>>;
  id?: number;
  imageFormat?: string;
}
