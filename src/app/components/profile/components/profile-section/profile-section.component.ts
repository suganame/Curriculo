import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-profile-section',
  templateUrl: './profile-section.component.html',
})
export class ProfileSectionComponent {
  // title = '';

  @Input() title: string = '';
}
