import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  OnChanges,
  ChangeDetectionStrategy,
} from '@angular/core';
import { FrontendCharacter } from '../interfaces';

/**
 * WHAT IT DOES?
 *
 * DISPLAY NAME EDITOR
 * EMIT EVENTS TO THE PARENT
 */
@Component({
  selector: 'app-star-wars-character-editor-presentation',
  templateUrl: './star-wars-character-editor-presentation.component.html',
  styleUrls: ['./star-wars-character-editor-presentation.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StarWarsCharacterEditorPresentationComponent
  implements OnInit, OnChanges
{
  @Input() character: FrontendCharacter;
  @Output() changeName = new EventEmitter();

  name: string = '';

  constructor() {}

  ngOnInit() {}

  ngOnChanges() {
    this.name = this.character?.name || '';
  }
}
