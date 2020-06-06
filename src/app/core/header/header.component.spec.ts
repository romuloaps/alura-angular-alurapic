import { async, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { UserService } from '../user/user.service';
import { HeaderComponent } from './header.component';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

describe("HeaderComponent", () => {

    let component: HeaderComponent;
    let userService: jasmine.SpyObj<UserService>;
    let router: Router;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [HeaderComponent],
            providers: [
                {proviver: UserService, useValue: jasmine.createSpyObj("UserService", ["getUser", "logout"])}
            ],
            imports: [RouterTestingModule.withRoutes([])]
        }).compileComponents();
    }));

    beforeEach(() => {
        userService = TestBed.inject(UserService) as jasmine.SpyObj<UserService>;
        router = TestBed.inject(Router);

        const fixture = TestBed.createComponent(HeaderComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it("deve ser instanciado", () => {
        expect(component).toBeDefined();
    });

    it("deve realizar o logout", () => {
        const navigateSpy = spyOn(router, "navigate");
        const logoutSpy = spyOn(userService, "logout");

        component.logout();

        expect(logoutSpy).toHaveBeenCalled();
        expect(navigateSpy).toHaveBeenCalledWith(['']);
    });
});