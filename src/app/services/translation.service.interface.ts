import { Observable } from "rxjs";

export interface ITranslationService {
  setLanguage(string)
  translate(string): string
  translationChanged(): Observable<void>
}
