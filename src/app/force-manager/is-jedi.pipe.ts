import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'isJedi',
})
export class IsJediPipe implements PipeTransform {
  transform(character: any, jedis: string[]): any {
    if (jedis.indexOf(character.id) > -1) {
      return 'is a jedi ⚔️';
    }
    return '';
  }
}
