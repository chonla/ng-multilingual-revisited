import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { TranslatePipe } from './pipes/translate.pipe';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        TranslatePipe
      ],
    }).compileComponents();
  }));
});
