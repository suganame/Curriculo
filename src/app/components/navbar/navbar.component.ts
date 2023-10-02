import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  @Output('changeLanguage') changeLanguage: EventEmitter<any> =
    new EventEmitter();

  title = 'portfolio-angular';
  defaultLanguage = 'br';
  languange = this.defaultLanguage;

  onChangeLanguageClick() {
    if (this.languange === this.defaultLanguage) {
      this.languange = 'en';
      return this.changeLanguage.emit('en');
    }
    this.languange = this.defaultLanguage;
    return this.changeLanguage.emit(this.defaultLanguage);
  }
}
