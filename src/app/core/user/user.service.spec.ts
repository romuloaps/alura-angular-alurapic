import { TestBed } from '@angular/core/testing';

import { UserService } from './user.service';
import { TokenService } from '../token/token.service';

describe("UserService", () => {

    const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwibmFtZSI6ImZsYXZpbyIsImVtYWlsIjoiZmxhdmlvQGFsdXJhcGljLmNvbS5iciIsImlhdCI6MTU4OTE5MzM2MCwiZXhwIjoxNTg5Mjc5NzYwfQ.HCJ-zTE0z_8P3Fv8w86lybKLsrEM_jFXxdBqHCSyOvc";

    let service: UserService;
    let tokenService: jasmine.SpyObj<TokenService>;

    beforeEach(() => {
        const tokenServiceDependencySpy = jasmine.createSpyObj("TokenService", ["getToken", "hasToken", "setToken", "removeToken"]);

        TestBed.configureTestingModule({
            providers: [
                UserService,
                { provide: TokenService, useValue: tokenServiceDependencySpy }
            ]
        });
        service = TestBed.inject(UserService);
        tokenService = TestBed.inject(TokenService) as jasmine.SpyObj<TokenService>;
        tokenService.getToken.and.returnValue(TOKEN);
        tokenService.setToken.and.returnValue(null);
        tokenService.removeToken.and.returnValue(null);
    })

    it("deve ser instanciado", () => {
        expect(service).toBeTruthy();
    });

    it("deve recuperar dados do usuário através do token informado", () => {
        tokenService.hasToken.and.returnValue(true);

        service.setToken(TOKEN);

        expect(service.isLogged()).toBeTrue();
        expect(service.getUserName()).toBe("flavio");
        service.getUser().subscribe(user => expect(user.name).toBe("flavio"));
    });

    it("deve limpar os dados do usuário após o logout", () => {
        tokenService.hasToken.and.returnValue(false);
        
        service.setToken(TOKEN);
        service.logout();

        expect(service.isLogged()).toBeFalse();
        expect(service.getUserName()).toBeFalsy();
    });
});