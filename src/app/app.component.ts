import { Component } from '@angular/core';
import { TranslationService } from './services/translation.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private translator: TranslationService) {

  }

  setLang(lang: string) {
    this.translator.setLanguage(lang);
  }

}
