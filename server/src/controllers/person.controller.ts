import {forkJoin, Observable} from 'rxjs';
import {map, switchMap} from 'rxjs/operators';
import {appConstants} from '../data/app-constants';
import {Film, Person, Planet, Specie} from '../models/core.model';
import * as http from '../services/http.service';

export function getPerson(id: string): Observable<Partial<Person>> {
  let personResponse: Person;
  const options = {
    url: appConstants.url.people + id
  };
  return http.get(options).pipe(
    switchMap((res: any) => {
      personResponse = JSON.parse(res);
      return getHomePlanet(personResponse.homeworld as string);
    }),
    switchMap((planet: Partial<Planet>) => {
      personResponse.home_planet = planet;
      return getSpecies(personResponse.species as string[]);
    }),
    switchMap((species: Array<Partial<Specie>>) => {
      personResponse.species = species;
      return getFilms(personResponse.films as string[]);
    }),
    map((species: Array<Partial<Film>>) => {
      personResponse.films = species;
      return transformPerson(personResponse);
    })
  );
}

function getHomePlanet(url: string): Observable<Partial<Planet>> {
  const options = {
    url
  };
  return http.get(options).pipe(
    map((res: any) => {
      const response: Planet = JSON.parse(res);
      return transformPlanet(response);
    })
  );
}

function getSpecies(speciesUrl: string[]): Observable<Array<Partial<Specie>>> {
  const species$ = speciesUrl.map((specie) => {
    const options = {
      url: specie
    };
    return http.get(options).pipe(
      map((res: any) => {
        const response: Specie = JSON.parse(res);
        return transformSpecie(response);
      })
    );
  });
  return forkJoin(species$);
}

function getFilms(filmsUrl: string[]): Observable<Array<Partial<Film>>> {
  const films$ = filmsUrl.map((film) => {
    const options = {
      url: film
    };
    return http.get(options).pipe(
      map((res: any) => {
        const response: Film = JSON.parse(res);
        return transformFilm(response);
      })
    );
  });
  return forkJoin(films$);
}

function transformFilm(response: Film): Partial<Film> {
  return {
    title: response.title,
    director: response.director,
    producer: response.producer,
    release_date: response.release_date
  };
}

function transformSpecie(response: Specie): Partial<Specie> {
  return {
    name: response.name,
    average_lifespan: response.average_lifespan,
    classification: response.classification,
    language: response.language
  };
}

function transformPlanet(response: Planet): Partial<Planet> {
  return {
    title: response.name,
    terrain: response.terrain,
    population: response.population
  };
}

function transformPerson(response: Person): Partial<Person> {
  return {
    name: response.name,
    height: response.height,
    mass: response.mass,
    hair_color: response.hair_color,
    skin_color: response.skin_color,
    gender: response.gender,
    birth_year: response.birth_year,
    home_planet: response.home_planet,
    species: response.species,
    films: response.films
  };
}

export function validateId(id: string): boolean {
  return !isNaN(Number(id)) && Number(id) > -1;
}
