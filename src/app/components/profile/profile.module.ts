import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgIconsModule } from '@ng-icons/core';
import {
  bootstrapGithub,
  bootstrapGlobeAmericas,
} from '@ng-icons/bootstrap-icons';
import {
  matMailOutline,
  matHomeOutline,
  matPhoneAndroidOutline,
} from '@ng-icons/material-icons/outline';

import { bootstrapCodeSlash } from '@ng-icons/bootstrap-icons';
import { ProfileComponent } from './profile.component';
import { ProfileBackgroundComponent } from './components/profile-background/profile-background.component';
import { ProfileDescriptionComponent } from './components/profile-description/profile-description.component';
import { ProfilePictureComponent } from './components/profile-picture/profile-picture.component';
import { ProfileSectionComponent } from './components/profile-section/profile-section.component';
import { ProfileExperienceComponent } from './components/profile-experience/profile-experience.component';
import { ProfileContactComponent } from './components/profile-contact/profile-contact.component';
import { ProfileLanguageComponent } from './components/profile-language/profile-language.component';
import { ProfileEducationComponent } from './components/profile-education/profile-education.component';
import { ProfileSkillComponent } from './components/profile-skill/profile-skill.component';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [
    ProfileComponent,
    ProfileBackgroundComponent,
    ProfileDescriptionComponent,
    ProfilePictureComponent,
    ProfileSectionComponent,
    ProfileExperienceComponent,
    ProfileContactComponent,
    ProfileLanguageComponent,
    ProfileEducationComponent,
    ProfileSkillComponent,
  ],
  imports: [
    CommonModule,
    NgIconsModule.withIcons({
      bootstrapGithub,
      matMailOutline,
      matHomeOutline,
      matPhoneAndroidOutline,
      bootstrapCodeSlash,
      bootstrapGlobeAmericas,
    }),
    TranslateModule,
  ],
  exports: [
    ProfileComponent,
    ProfileBackgroundComponent,
    ProfileDescriptionComponent,
    ProfilePictureComponent,
    ProfileSectionComponent,
    ProfileExperienceComponent,
    ProfileContactComponent,
    ProfileLanguageComponent,
    ProfileEducationComponent,
    ProfileSkillComponent,
  ],
})
export class ProfileModule {}
