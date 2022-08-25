import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  ChangeDetectionStrategy,
} from '@angular/core';
import { FrontendCharacter } from '../interfaces';

/**
 * WHAT IT DOES?
 *
 * DISPLAY A LIST OF CHARACTERS
 * EMIT EVENTS TO THE PARENT
 */
@Component({
  selector: 'app-star-wars-characters-list-presentation',
  templateUrl: './star-wars-characters-list-presentation.component.html',
  styleUrls: ['./star-wars-characters-list-presentation.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StarWarsCharactersListPresentationComponent implements OnInit {
  @Input() characters: FrontendCharacter[];
  @Input() selectedCharacter: FrontendCharacter;
  @Input() jedis: string[];
  @Input() siths: string[];
  @Output() select = new EventEmitter();
  @Output() toJedi = new EventEmitter();
  @Output() toSith = new EventEmitter();
  @Output() removeForce = new EventEmitter();

  constructor() {}

  ngOnInit() {}
}
