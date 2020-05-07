import { lowerCaseValidator } from './lower-case.validator';

describe("lowerCaseValidator", () => {
    const control = jasmine.createSpyObj("control", ["value"]);

    it("deve retornar com validação quando texto possui algum caracter maiúsculo", () => {
        control.value = "teXto";
        expect(lowerCaseValidator(control)).toEqual({lowerCase: true});
    });

    it ("deve retornar null quando texto está em caixa baixa", () => {
        control.value = "texto";
        expect(lowerCaseValidator(control)).toBeNull();
    });
});