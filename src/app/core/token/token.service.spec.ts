import { TokenService } from './token.service';

describe("TokenService", () => {

    const TOKEN = "token";
    const TOKEN_KEY = "auth_token";

    let service: TokenService;

    beforeEach(() => {
        service = new TokenService();
        window.localStorage.clear();
    });

    it ("deve ser instanciado", () => {
        const service = new TokenService();
        expect(service).toBeTruthy();
    });

    it ("deve guardar o token", () => {
        service.setToken(TOKEN);

        expect(window.localStorage.getItem(TOKEN_KEY)).toBeTruthy();
        expect(window.localStorage.getItem(TOKEN_KEY)).toBe(TOKEN);
    });

    it ("deve remover o token", () => {
        service.setToken(TOKEN);
        service.removeToken();

        expect(window.localStorage.getItem(TOKEN_KEY)).toBeFalsy();
    });

    it ("deve retornar o token guardado", () => {
        service.setToken(TOKEN);

        expect(service.getToken()).toBe(window.localStorage.getItem(TOKEN_KEY));
    });

    it ("deve retornar null quando não há token guardado", () => {
        expect(service.getToken()).toBeNull();
    });

    it ("deve retornar true quando há token guardado", () => {
        service.setToken(TOKEN);

        expect(service.hasToken()).toBeTrue();
    });

    it ("deve retornar false quando não há token guardado", () => {
        expect(service.hasToken()).toBeFalse();
    });
});