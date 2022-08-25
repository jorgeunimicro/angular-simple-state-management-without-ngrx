import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IsJediPipe } from './is-jedi.pipe';
import { IsSithPipe } from './is-sith.pipe';
import { StarWarsCharactersListPresentationComponent } from './star-wars-characters-list-presentation/star-wars-characters-list-presentation.component';
import { StarWarsCharacterEditorPresentationComponent } from './star-wars-character-editor-presentation/star-wars-character-editor-presentation.component';
import { StarWarsCharactersContainerComponent } from './star-wars-characters-container/star-wars-characters-container.component';
import { StarWarsCharactersDataService } from './star-wars-characters-data.service';
import { StarWarsCharactersFacadeService } from './star-wars-characters-facade.service';
import { ErrorPresentationComponent } from './error-presentation/error-presentation.component';
import { ForceDataService } from './force-data.service';

@NgModule({
  imports: [BrowserModule, FormsModule, ReactiveFormsModule],
  declarations: [
    StarWarsCharacterEditorPresentationComponent,
    StarWarsCharactersListPresentationComponent,
    ErrorPresentationComponent,
    StarWarsCharactersContainerComponent,
    IsJediPipe,
    IsSithPipe,
  ],
  providers: [
    {
      provide: StarWarsCharactersFacadeService,
      useClass: StarWarsCharactersFacadeService,
    },
    {
      provide: StarWarsCharactersDataService,
      useClass: StarWarsCharactersDataService,
    },
    {
      provide: ForceDataService,
      useClass: ForceDataService,
    },
  ],
  exports: [StarWarsCharactersContainerComponent],
})
export class ForceManagerModule {}
