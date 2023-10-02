import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  @Output('changeLanguage') changeLanguage: EventEmitter<any> =
    new EventEmitter();

  title = 'portfolio-angular';
  defaultLanguage = 'br';
  currentLanguage = this.defaultLanguage;

  openSelect = false;

  languages = [
    {
      abbreviation: 'br',
      class: 'fi fi-br fis',
    },
    {
      abbreviation: 'us',
      class: 'fi fi-us fis',
    },
  ];

  onChangeLanguageClick(lang: string) {
    this.currentLanguage = lang;
    this.changeLanguage.emit(lang);
    // if (this.language === this.defaultLanguage) {
    //   this.language = 'us';
    //   return this.changeLanguage.emit('us');
    // }
    // this.language = this.defaultLanguage;
    // return this.changeLanguage.emit(this.defaultLanguage);
  }

  toggleSelect() {
    this.openSelect = !this.openSelect;
  }
}
