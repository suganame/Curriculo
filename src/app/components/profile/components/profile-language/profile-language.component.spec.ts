import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileLanguageComponent } from './profile-language.component';

describe('ProfileLanguageComponent', () => {
  let component: ProfileLanguageComponent;
  let fixture: ComponentFixture<ProfileLanguageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProfileLanguageComponent]
    });
    fixture = TestBed.createComponent(ProfileLanguageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
