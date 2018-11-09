import { Pipe, PipeTransform } from '@angular/core';
import { ITranslationService } from '../services/translation.service.interface';

@Pipe({
  name: 'translate',
  pure: false
})
export class TranslatePipe implements PipeTransform {

  constructor(private translator: ITranslationService) {
  }

  transform(text: string): string {
    return this.translator.translate(text);
  }

}
