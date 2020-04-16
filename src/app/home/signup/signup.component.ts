import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
    templateUrl: './signup.component.html'
})
export class SignUpComponent implements OnInit {

    signUpForm: FormGroup;

    constructor(private formBuilder: FormBuilder) { }

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
                    Validators.pattern(/^[a-z0-9_\-]+$/),
                    Validators.minLength(3),
                    Validators.maxLength(30)
                ]
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
}