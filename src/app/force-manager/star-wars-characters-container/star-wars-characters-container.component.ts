import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { shareReplay } from 'rxjs';
import { FrontendCharacter } from '../interfaces';
import { StarWarsCharactersFacadeService } from '../star-wars-characters-facade.service';

/**
 * WHAT IT DOES?
 *
 * RETRIEVE DATA FROM FACADE (QUERYS)
 * SEND EVENTS TO THE FACADE (COMMANDS)
 */
@Component({
  selector: 'app-star-wars-characters-container',
  templateUrl: './star-wars-characters-container.component.html',
  styleUrls: ['./star-wars-characters-container.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StarWarsCharactersContainerComponent implements OnInit {
  characters$ = this.starWarsCharactersFacade.characters$;
  selectedCharacter$ = this.starWarsCharactersFacade.selectedCharacter$.pipe(
    shareReplay({ refCount: true, bufferSize: 1 }) // use that if you share the state in multiple components
  );
  jedis$ = this.starWarsCharactersFacade.jedis$;
  siths$ = this.starWarsCharactersFacade.siths$;
  error$ = this.starWarsCharactersFacade.error$;

  constructor(
    private starWarsCharactersFacade: StarWarsCharactersFacadeService
  ) {}

  ngOnInit() {
    this.starWarsCharactersFacade.loadCharacters();
    this.starWarsCharactersFacade.loadJedis();
    this.starWarsCharactersFacade.loadSiths();
  }

  onSelect(character: FrontendCharacter): void {
    this.starWarsCharactersFacade.select(character);
  }

  onChangeName(data): void {
    this.starWarsCharactersFacade.update(data);
  }

  onToJedi(character: FrontendCharacter): void {
    this.starWarsCharactersFacade.promoteToJedi(character);
  }

  onToSith(character: FrontendCharacter): void {
    this.starWarsCharactersFacade.moveToDarkSide(character);
  }

  onRemoveForce(character: FrontendCharacter): void {
    this.starWarsCharactersFacade.removeForceFrom(character);
  }

  onClearError() {
    this.starWarsCharactersFacade.clearError();
  }
}
