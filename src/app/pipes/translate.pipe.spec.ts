import { TranslatePipe } from './translate.pipe';
import { TranslationService } from '../services/translation.service';
import { Subject, empty } from 'rxjs';
import { ITranslationService } from '../services/translation.service.interface';

describe('TranslatePipe', () => {
  it('create an instance', () => {
    const translator = new TranslationService();
    const pipe = new TranslatePipe(translator);
    expect(pipe).toBeTruthy();
  });

  it('should return data from translation service', () => {
    const MockTranslationService = jest.fn<ITranslationService​>(() => ({
      translate: jest.fn().mockImplementation(() => {
        return 'okok';
      })
    }));
    const translator = new MockTranslationService();
    const pipe = new TranslatePipe(translator);
    const result = pipe.transform('1234');
    expect(result).toEqual('okok');
    expect(translator.translate).toHaveBeenCalledWith('1234');
    expect(translator.translate).toHaveBeenCalledTimes(1);
  })
});
