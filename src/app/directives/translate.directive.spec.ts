import { TranslateDirective } from './translate.directive';
import { ElementRef } from '@angular/core';
import { TranslationService } from '../services/translation.service';

describe('TranslateDirective', () => {
  it('should create an instance', () => {
    const el: ElementRef = {
      nativeElement: {
        innerText: ""
      }
    };
    const translator: TranslationService = new TranslationService();
    const directive = new TranslateDirective(el, translator);
    expect(directive).toBeTruthy();
  });
});
