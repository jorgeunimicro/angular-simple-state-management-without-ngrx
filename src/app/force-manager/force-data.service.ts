import { Injectable } from '@angular/core';
import { of, throwError } from 'rxjs';
import { jedis, siths } from '../data';

let jedisList = [...jedis];
let sithList = [...siths];

/**
 * WHAT IT DOES?
 *
 * SEND REQUEST TO API
 */
@Injectable({
  providedIn: 'root',
})
export class ForceDataService {
  constructor() {}

  getJedis() {
    return of(jedisList);
  }

  getSiths() {
    return of(sithList);
  }

  promoteToJedi(character) {
    sithList = sithList.filter((item) => item !== character.id);
    if (jedisList.indexOf(character.id) < 0) {
      jedisList.push(character.id);
    } else {
      return throwError(() => new Error(`${character.name} is already a Jedi`));
    }
    return of({ jedis: [...jedisList], siths: [...sithList] });
  }

  goToDarkSide(character) {
    jedisList = jedisList.filter((item) => item !== character.id);
    if (sithList.indexOf(character.id) < 0) {
      sithList.push(character.id);
    } else {
      return throwError(
        () => new Error(`${character.name} is already a Shith`)
      );
    }
    return of({ jedis: [...jedisList], siths: [...sithList] });
  }

  removeForceFrom(character) {
    if (
      sithList.indexOf(character.id) === -1 &&
      jedisList.indexOf(character.id) === -1
    ) {
      return throwError(
        () =>
          new Error(
            `${character.name} hasn't the force so it can't be removed.`
          )
      );
    }
    jedisList = jedisList.filter((item) => item !== character.id);
    sithList = sithList.filter((item) => item !== character.id);
    return of({ jedis: [...jedisList], siths: [...sithList] });
  }
}
