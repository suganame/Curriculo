import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'portfolio-angular';
  defaultLanguage = 'br';
  languange = this.defaultLanguage;

  constructor(private translate: TranslateService) {
    this.translate.setDefaultLang(this.defaultLanguage);
    this.translate.use(this.defaultLanguage);
  }

  changeLanguage(lang: string) {
    this.translate.use(lang);
  }
}
