import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'portfolio-angular';

  constructor(private translate: TranslateService) {
    this.translate.setDefaultLang('pt-br');
    this.translate.use('pt-br');
  }
}
