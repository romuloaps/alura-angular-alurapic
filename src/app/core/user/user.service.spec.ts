import { UserService } from './user.service';
import { TokenService } from '../token/token.service';

describe("UserService", () => {

    const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwibmFtZSI6ImZsYXZpbyIsImVtYWlsIjoiZmxhdmlvQGFsdXJhcGljLmNvbS5iciIsImlhdCI6MTU4OTE5MzM2MCwiZXhwIjoxNTg5Mjc5NzYwfQ.HCJ-zTE0z_8P3Fv8w86lybKLsrEM_jFXxdBqHCSyOvc";

    let service: UserService;

    beforeEach(() => {
        service = new UserService(new TokenService());
    })

    it("deve ser instanciado", () => {
        expect(service).toBeTruthy();
    });

    it("deve recuperar dados do usuário através do token informado", () => {
        service.setToken(TOKEN);

        expect(service.isLogged()).toBeTrue();
        expect(service.getUserName()).toBe("flavio");
        service.getUser().subscribe(user => expect(user.name).toBe("flavio"));
    });

    it("deve limpar os dados do usuário após o logout", () => {
        service.setToken(TOKEN);
        service.logout();

        expect(service.isLogged()).toBeFalse();
        expect(service.getUserName()).toBeFalsy();
    });
});