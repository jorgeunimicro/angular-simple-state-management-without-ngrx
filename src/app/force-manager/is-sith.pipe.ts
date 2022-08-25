import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'isSith',
})
export class IsSithPipe implements PipeTransform {
  transform(character: any, siths: string[]): any {
    if (siths.indexOf(character.id) > -1) {
      return 'is a sith 😈​';
    }
    return '';
  }
}
