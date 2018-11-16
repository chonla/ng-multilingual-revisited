import { Directive, ElementRef, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { ITranslationService } from '../services/translation.service.interface';

@Directive({
  selector: 'translate, [translate]'
})
export class TranslateDirective implements OnInit, OnDestroy {
  private translationChanged$: Subscription;
  private key: string;

  constructor(private el: ElementRef,
    private translator: ITranslationService) { }

  ngOnInit(): void {
    this.key = this.el.nativeElement.innerText;
    this.el.nativeElement.innerText = this.translator.translate(this.key);
    this.translationChanged$ = this.translator.translationChanged().subscribe(_ => {
      this.el.nativeElement.innerText = this.translator.translate(this.key);
    })
  }

  ngOnDestroy(): void {
    if (this.translationChanged$) {
      this.translationChanged$.unsubscribe();
    }
  }

}
