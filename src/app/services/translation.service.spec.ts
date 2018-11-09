import { TranslationService } from './translation.service';
import { environment } from 'src/environments/environment';

describe('TranslationService', () => {
  let service : TranslationService;

  beforeEach(() => {
    service = new TranslationService();
  });

  it('should be created with default language', () => {
    expect(service.getLanguage()).toEqual(environment.default.language);
  });

  it('should set to new language', () => {
    service.setLanguage('zh');

    expect(service.getLanguage()).toEqual('zh');
  });

  it('should return entry from translation table if key exists', () => {
    const table: { [lang:string]: { [key:string] : string}}= {
      th: {
        'hello': 'greeting',
        'my_name': 'bill gate'
      }
    };
    service.setTranslationTable(table);
    service.setLanguage('th');

    expect(service.translate('hello')).toEqual('greeting');
  });

  it('should return key itself if language does not exist', () => {
    const table: { [lang:string]: { [key:string] : string}}= {
      th: {
        'hello': 'greeting',
        'my_name': 'bill gate'
      }
    };
    service.setTranslationTable(table);
    service.setLanguage('xxxx');

    expect(service.translate('hello')).toEqual('hello');
  });

  it('should return key itself if key does not exist', () => {
    const table: { [lang:string]: { [key:string] : string}}= {
      th: {
        'hello': 'greeting',
        'my_name': 'bill gate'
      }
    };
    service.setTranslationTable(table);
    service.setLanguage('th');

    expect(service.translate('non-existing-key')).toEqual('non-existing-key');
  });
});
