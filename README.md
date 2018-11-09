# Angular Multilingual Revisited

This project is to show an alternative simple way to handle multilingual in Angular application. The original version of this is at [https://github.com/chonla/ng-multilingual-example](https://github.com/chonla/ng-multilingual-example).

## Translation Table

Just add new translations to ```src/app/i18n``` directory and import it to ```src/app/i18n/translation-table.ts```. See ```src/app/i18n/en.ts``` for example.

## Usage

#### As Directive

```
<translate>hello_world</translate>
```

#### As Pipe

I use impure pipe to implement this. This may cause some issue as stated in [document](https://angular.io/guide/pipes).

```
{{ 'hello_world' | translate }}
```

#### As Service

```
constructor(private translator: TranslatorService) {}

translate() {
  const result = this.translator.translate('hello_world');
}
```

## Service Methods

*setLanguage(id: string)*

To set language. Parameter id is defined as in ```src/app/i18n/translations.ts```.

*getLanguage(): string*

To get current language.

*translate(text: string): string*

To translate the given text. If not found in translation table, text is returned.

*translationChanged(): Observable<any>*

To hook to an event when translation table or language is changed.

