import { Pipe, PipeTransform } from '@angular/core';
import { TranslationService } from '../services/translation.service';

@Pipe({
  name: 'translate',
  pure: false
})
export class TranslatePipe implements PipeTransform {

  constructor(private translator: TranslationService) {
  }

  transform(text: string): string {
    return this.translator.translate(text);
  }

}
