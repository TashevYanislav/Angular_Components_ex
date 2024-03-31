import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { EMAIL_DOMAINS } from 'src/app/constants';
import { emailValidator } from 'src/app/shared/utils/email-validator';
import { profileDetails } from 'src/app/types/user';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent {
  showEditMode: boolean = false;

  profileDetails: profileDetails = {
    username: 'Jhon Doe',
    tel: '123-123-123',
    email: 'jhon@gmail.com',
  };

  form = this.fb.group({
    username: ['', [Validators.required, Validators.minLength(5)]],
    email: ['', [Validators.required, emailValidator(EMAIL_DOMAINS)]],
    tel: [''],
  });

  constructor(private fb: FormBuilder) {}

  Toggle(): void {
    this.showEditMode = !this.showEditMode;
  }
  saveProfileHandler() {
    if (this.form.invalid) {
      return;
    }
    this.profileDetails = this.form.value as profileDetails;
    this.Toggle();
  }
  onCancel(e: Event) {
    e.preventDefault();
    console.log('cancel invoked');
    this.Toggle();
  }
}
