import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { FooterComponent } from './footer.component';
import { UserService } from '../user/user.service';

describe("Footer", () => {

    let component: FooterComponent;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [FooterComponent],
            providers: [
                { provide: UserService, useValue: jasmine.createSpyObj("UserService", ["getUser"]) }
            ],
            imports: [RouterTestingModule]
        }).compileComponents();

    }));

    beforeEach(() => {
        const fixture = TestBed.createComponent(FooterComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it("deve ser instanciado", () => {
        expect(component).toBeTruthy();
    });
});