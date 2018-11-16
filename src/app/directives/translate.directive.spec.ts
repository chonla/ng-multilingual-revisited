import { TranslateDirective } from './translate.directive';
import { ElementRef } from '@angular/core';
import { TranslationService } from '../services/translation.service';
import { ITranslationService } from '../services/translation.service.interface';
import { Subject } from 'rxjs';

describe('TranslateDirective', () => {
  it('should create an instance', () => {
    const MockTranslationService = jest.fn<ITranslationService​>(() => ({
      translate: jest.fn().mockImplementation(() => {
        return 'okok';
      }),
      translationChanged: jest.fn().mockImplementation(() => {
        return (new Subject<void>()).asObservable();
      })
    }));
    const translator = new MockTranslationService();
    const el: ElementRef = {
      nativeElement: {
        innerText: "test"
      }
    };
    const directive = new TranslateDirective(el, translator);

    directive.ngOnInit();

    expect(translator.translate).toHaveBeenCalledWith('test');
    expect(translator.translate).toHaveBeenCalledTimes(1);
    expect(el.nativeElement.innerText).toBe('okok');
  });
});
