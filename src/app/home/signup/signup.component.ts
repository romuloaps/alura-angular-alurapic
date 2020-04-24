import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { lowerCaseValidator } from '../../shared/validators/lower-case.validator';
import { UserNotTakenValidatorService } from './user-not-taken.validator.service';
import { NewUser } from './new-user';
import { SignUpService } from './signup.service';
import { PlatformDetectorService } from '../../core/platform-detector/platform-detector.service';

@Component({
    templateUrl: './signup.component.html',
    providers: [UserNotTakenValidatorService]
})
export class SignUpComponent implements OnInit, AfterViewInit {

    signUpForm: FormGroup;
    @ViewChild("emailInput") emailInput: ElementRef<HTMLInputElement>;

    constructor(
        private formBuilder: FormBuilder,
        private userNotTakenValidatorService: UserNotTakenValidatorService,
        private signUpService: SignUpService,
        private router: Router,
        private platformDetector: PlatformDetectorService
    ) { }

    ngOnInit(): void {
        this.signUpForm = this.formBuilder.group({
            email: ['', 
                [
                    Validators.required,
                    Validators.email
                ]
            ],
            fullName: ['', 
                [
                    Validators.required,
                    Validators.minLength(3),
                    Validators.maxLength(40)
                ]
            ],
            userName: ['', 
                [
                    Validators.required,
                    lowerCaseValidator,
                    Validators.minLength(3),
                    Validators.maxLength(30)
                ],
                this.userNotTakenValidatorService.checkUserNameTaken()
            ],
            password: ['', 
                [
                    Validators.required,
                    Validators.minLength(3),
                    Validators.maxLength(30)
                ]
            ]
        });
    }

    ngAfterViewInit(): void {
        this.setEmailInputFocus();
    }

    signUp(): void {
        const newUser = this.signUpForm.getRawValue() as NewUser;
        this.signUpService
            .signUp(newUser)
            .subscribe(
                () => this.router.navigate([""]),
                err => console.log(err)
            );
    }

    private setEmailInputFocus() {
        this.platformDetector.isPlatformBrowser()
        && this.emailInput.nativeElement.focus();
    }
}