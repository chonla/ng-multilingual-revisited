import { TranslateDirective } from "../directives/translate.directive";

export interface ITranslationService {
  setLanguage(string)
  translate(string): string
}
