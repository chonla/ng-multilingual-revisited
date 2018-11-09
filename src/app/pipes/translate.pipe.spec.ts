import { TranslatePipe } from './translate.pipe';
import { TranslationService } from '../services/translation.service';

describe('TranslatePipe', () => {
  it('create an instance', () => {
    const translator = new TranslationService();
    const pipe = new TranslatePipe(translator);
    expect(pipe).toBeTruthy();
  });
});
