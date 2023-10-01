import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ProfileComponent } from './components/profile/profile.component';
import { ProfileBackgroundComponent } from './components/profile/components/profile-background/profile-background.component';
import { ProfileDescriptionComponent } from './components/profile/components/profile-description/profile-description.component';
import { ProfilePictureComponent } from './components/profile/components/profile-picture/profile-picture.component';
import { ProfileSectionComponent } from './components/profile/components/profile-section/profile-section.component';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ProfileExperienceComponent } from './components/profile/components/profile-experience/profile-experience.component';
import { ProfileContactComponent } from './components/profile/components/profile-contact/profile-contact.component';
import { ProfileLanguageComponent } from './components/profile/components/profile-language/profile-language.component';
import { ProfileEducationComponent } from './components/profile/components/profile-education/profile-education.component';
import { ProfileSkillComponent } from './components/profile/components/profile-skill/profile-skill.component';
import { ProfileModule } from './components/profile/profile.module';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [AppComponent, NavbarComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
    }),
    ProfileModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
