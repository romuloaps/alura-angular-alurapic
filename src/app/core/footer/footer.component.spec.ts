import { TestBed } from '@angular/core/testing';

import { FooterComponent } from './footer.component';
import { UserService } from '../user/user.service';

describe("Footer", () => {

    let component: FooterComponent;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [FooterComponent],
            providers: [
                { provide: UserService, useValue: jasmine.createSpyObj("UserService", ["getUser"]) }
            ]
        });

        const fixture = TestBed.createComponent(FooterComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it("deve ser instanciado", () => {
        expect(component).toBeTruthy();
    });
});