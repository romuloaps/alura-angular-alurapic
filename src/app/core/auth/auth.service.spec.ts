import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { AuthService } from './auth.service';
import { UserService } from '../user/user.service';

describe("AuthService", () => {

    let service: AuthService;
    let httpMock: HttpTestingController;
    let userService: UserService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule],
            providers: [
                AuthService
            ]
        });

        service = TestBed.get(AuthService);
        httpMock = TestBed.get(HttpTestingController);
        userService = TestBed.get(UserService);
    });

    it("deve ser instanciado", () => {
        expect(service).toBeTruthy();
    });

    it("deve autenticar o usuário", () => {
        const fakeBody = {
            id: 1,
            name: "Teste",
            email: "teste@teste.com"
        };

        spyOn(userService, "setToken").and.returnValue(null);

        service
            .authenticate("teste", "123")
            .subscribe(response => {
                expect(response.body).toEqual(fakeBody);
                expect(response.headers.get("x-access-token")).toBe("tokenTeste");
            });

        const request = httpMock.expectOne(req => req.method === "POST");
        request.flush(fakeBody, {
            headers: {
                "x-access-token": "tokenTeste"
            }
        });
    })
});