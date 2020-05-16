import { TestBed, fakeAsync, tick } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { AuthService } from './auth.service';
import { UserService } from '../user/user.service';

describe("AuthService", () => {

    let service: AuthService;
    let httpMock: HttpTestingController;
    let userService: jasmine.SpyObj<UserService>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule],
            providers: [
                AuthService,
                {
                    provide: UserService,
                    useValue: jasmine.createSpyObj("UserService", ["setToken"])
                }
            ]
        });

        service = TestBed.inject(AuthService);
        httpMock = TestBed.inject(HttpTestingController);
        userService = TestBed.inject(UserService) as jasmine.SpyObj<UserService>;
    });

    it("deve ser instanciado", () => {
        expect(service).toBeTruthy();
    });

    it("deve autenticar o usuário", fakeAsync(() => {
        const fakeBody = {
            id: 1,
            name: "Teste",
            email: "teste@teste.com"
        };

        userService.setToken.and.returnValue(null);

        service
            .authenticate("teste", "123")
            .subscribe(response => {
                expect(response.body).toEqual(fakeBody);
                expect(userService.setToken).toHaveBeenCalledWith("tokenTeste");
            });

        const request = httpMock.expectOne(req => req.method === "POST");
        request.flush(fakeBody, {
            headers: {
                "x-access-token": "tokenTeste"
            }
        });

        tick();
    }));
});