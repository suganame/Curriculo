import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgIconsModule } from '@ng-icons/core';
import { bootstrapGlobeAmericas } from '@ng-icons/bootstrap-icons';
import { TranslateModule } from '@ngx-translate/core';
import { HeaderComponent } from './header.component';
import { matTranslate } from '@ng-icons/material-icons/baseline';

@NgModule({
  declarations: [HeaderComponent],
  imports: [
    CommonModule,
    NgIconsModule.withIcons({
      matTranslate,
    }),
    TranslateModule,
  ],
  exports: [HeaderComponent],
})
export class HeaderModule {}
