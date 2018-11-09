import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { TranslationTable } from '../i18n/translation-table';
import { Observable, empty, of, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TranslationService {
  private currentLanguage: string;
  private translationTable: { [lang:string]: { [key:string]: string }};
  private subject: Subject<any>;

  constructor() {
    this.subject = new Subject<any>();
    this.translationTable = TranslationTable;
    this.setLanguage(environment.default.language);
  }

  setLanguage(lang: string) {
    if (this.currentLanguage !== lang) {
      this.currentLanguage = lang;
      this.subject.next();
    }
  }

  getLanguage(): string {
    return this.currentLanguage;
  }

  setTranslationTable(table: { [lang:string]: { [key:string]: string }}) {
    this.translationTable = table;
  }

  translate(key: string): string {
    if (!this.translationTable.hasOwnProperty(this.currentLanguage)
    || !this.translationTable[this.currentLanguage].hasOwnProperty(key)) {
      return key;
    }
    return this.translationTable[this.currentLanguage][key];
  }

  translationChanged(): Observable<any> {
    return this.subject.asObservable();
  }
}
