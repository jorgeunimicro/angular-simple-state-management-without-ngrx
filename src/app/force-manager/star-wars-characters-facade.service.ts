import { Injectable } from '@angular/core';
import { BehaviorSubject, of, Subscription } from 'rxjs';
import { delay } from 'rxjs/operators';
import { FrontendCharacter } from './interfaces';
import { ForceDataService } from './force-data.service';
import { StarWarsCharactersDataService } from './star-wars-characters-data.service';
import { mapCharacterForFronted } from './character-mapper';

/**
 * WHAT IT DOES?
 *
 * TRANSFER UI PETITIONS TO SERVICE
 * UPDATE STATE
 */
@Injectable({
  providedIn: 'root',
})
export class StarWarsCharactersFacadeService {
  /**
   * if that grows we can split this between
   * querys and commands
   *
   * also you can split code between ui state and model state
   */
  private characters = new BehaviorSubject<any>(null);
  characters$ = this.characters.asObservable();

  private selectedCharacter = new BehaviorSubject<any>(null);
  selectedCharacter$ = this.selectedCharacter.asObservable();

  private jedis = new BehaviorSubject<any>([]);
  jedis$ = this.jedis.asObservable();

  private siths = new BehaviorSubject<any>([]);
  siths$ = this.siths.asObservable();

  private error = new BehaviorSubject<any>(null);
  error$ = this.error.asObservable();
  errorSubscription: Subscription;

  constructor(
    private starWarsCharactersDataService: StarWarsCharactersDataService,
    private forceDataService: ForceDataService
  ) {}

  loadCharacters(): void {
    this.starWarsCharactersDataService.all().subscribe((users) => {
      this.characters.next(users.map(mapCharacterForFronted));
    });
  }

  loadJedis(): void {
    this.forceDataService.getJedis().subscribe((jedis) => {
      this.jedis.next(jedis);
    });
  }

  loadSiths(): void {
    this.forceDataService
      .getSiths()
      .subscribe((siths) => this.siths.next(siths));
  }

  select(character: FrontendCharacter): void {
    this.selectedCharacter.next(character);
  }

  update(data): void {
    this.starWarsCharactersDataService
      .update(data.character.id, data.name)
      .subscribe((_) => {
        this.loadCharacters();
        this.select(null);
      });
  }

  promoteToJedi(character): void {
    this.forceDataService.promoteToJedi(character).subscribe({
      next: (lists) => {
        this.jedis.next(lists.jedis);
        this.siths.next(lists.siths);
      },
      error: (error) => this.emitError(error),
    });
  }

  moveToDarkSide(character): void {
    this.forceDataService.goToDarkSide(character).subscribe({
      next: (lists) => {
        this.jedis.next(lists.jedis);
        this.siths.next(lists.siths);
      },
      error: (error) => this.emitError(error),
    });
  }

  removeForceFrom(character): void {
    this.forceDataService.removeForceFrom(character).subscribe({
      next: (lists) => {
        this.jedis.next(lists.jedis);
        this.siths.next(lists.siths);
      },
      error: (error) => this.emitError(error),
    });
  }

  emitError(error: Error) {
    this.clearError();
    this.error.next(error);
    this.errorSubscription = of(null)
      .pipe(delay(3000))
      .subscribe(() => this.clearError());
  }

  clearError() {
    this.error.next(null);
    if (this.errorSubscription) {
      this.errorSubscription.unsubscribe();
      this.errorSubscription = null;
    }
  }
}
