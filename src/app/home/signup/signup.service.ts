import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { NewUser } from './new-user';
import { ApiUtils } from '../../core/utils/api-utils';

@Injectable()
export class SignUpService {

    constructor(private http: HttpClient) { }

    checkUserNameTaken(userName: string) {
        return this.http.get(`${ApiUtils.API_URL_PREFIX}/user/exists/${userName}`);
    }

    signUp(newUser: NewUser) {
        return this.http.post(`${ApiUtils.API_URL_PREFIX}/user/signup`, newUser);
    }
}