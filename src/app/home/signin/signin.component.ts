import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from '../../core/auth/auth.service';
import { PlatformDetectorService } from '../../core/platform-detector/platform-detector.service';

@Component({
  templateUrl: './signin.component.html'
})
export class SignInComponent implements OnInit, AfterViewInit {

  loginForm: FormGroup;
  @ViewChild("userNameInput") userNameInput: ElementRef<HTMLInputElement>;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private platformDetector: PlatformDetectorService
  ) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      userName: ["", Validators.required],
      password: ["", Validators.required]
    });
  }

  ngAfterViewInit(): void {
    this.setUserNameInputFocus();
  }

  login(): void {
    const userName = this.loginForm.get("userName").value;
    const password = this.loginForm.get("password").value;

    this.authService
      .authenticate(userName, password)
      .subscribe(
        () => this.router.navigate(["user", userName]),
        error => {
          console.log(error);
          this.loginForm.reset();

          this.setUserNameInputFocus();
        }
      )
  }

  private setUserNameInputFocus() {
    this.platformDetector.isPlatformBrowser()
    && this.userNameInput.nativeElement.focus();
  }
}
