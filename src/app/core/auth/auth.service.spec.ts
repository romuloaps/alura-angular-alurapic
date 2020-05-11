import { TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';

import { AuthService } from './auth.service';

describe("AuthService", () => {

    let service: AuthService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientModule],
            providers: [
                AuthService
            ]
        });

        service = TestBed.get(AuthService);
    });

    it("deve ser instanciado", () => {
        expect(service).toBeTruthy();
    });
});