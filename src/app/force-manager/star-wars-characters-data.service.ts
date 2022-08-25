import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { users } from '../data';
import { BackendCharacter } from './interfaces';

let characters = users;

@Injectable({
  providedIn: 'root',
})
export class StarWarsCharactersDataService {
  constructor() {}

  all(): Observable<BackendCharacter[]> {
    return of(characters);
  }

  update(id: string, name: string): Observable<BackendCharacter> {
    characters = characters.map((c) => {
      if (c.ID === id) {
        c.Name = name;
        return c;
      }
      return c;
    });
    return of(characters.find((c) => c.ID === id));
  }
}
