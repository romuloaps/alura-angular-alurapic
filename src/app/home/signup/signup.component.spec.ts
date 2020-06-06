import { async, TestBed } from '@angular/core/testing';
import { SignUpComponent } from './signup.component';
import { SignUpService } from './signup.service';
import { UserNotTakenValidatorService } from './user-not-taken.validator.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { VMessageModule } from '../../shared/components/vmessage/vmessage.module';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { of, throwError } from 'rxjs';

describe("SignUp Component", () => {

    let component: SignUpComponent;
    let router: Router;
    let signUpService: SignUpService;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [SignUpComponent],
            providers: [SignUpService, UserNotTakenValidatorService],
            imports: [
                HttpClientTestingModule,
                ReactiveFormsModule,
                RouterTestingModule.withRoutes([]),
                VMessageModule
            ]
        }).compileComponents();
    }));

    beforeEach(() => {
        router = TestBed.inject(Router);
        signUpService = TestBed.inject(SignUpService);

        const fixture = TestBed.createComponent(SignUpComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it("deve ser instanciado", () => {
        expect(component).toBeDefined();
    });

    it("deve cadastrar um novo usuário", () => {
        const navigateSpy = spyOn(router, "navigate");
        spyOn(signUpService, "signUp").and.returnValue(of(null));

        component.signUpForm.get("email").setValue("teste@teste.com");
        component.signUpForm.get("fullName").setValue("Teste");
        component.signUpForm.get("userName").setValue("teste");
        component.signUpForm.get("password").setValue("teste");

        component.signUp();

        expect(navigateSpy).toHaveBeenCalledWith(['']);
    });

    it("deve realizar o log quando ocorrer algum erro no signUp", () => {
        spyOn(signUpService, "signUp").and.returnValue(throwError("teste de erro"));
        const log = spyOn(console, "log");

        component.signUpForm.get("email").setValue("teste@teste.com");
        component.signUpForm.get("fullName").setValue("Teste");
        component.signUpForm.get("userName").setValue("teste");
        component.signUpForm.get("password").setValue("teste");

        component.signUp();

        expect(log).toHaveBeenCalledWith("teste de erro");
    });
});