import { Injectable } from '@angular/core';
import { APIClient } from './api-client';
import { User } from 'src/app/models/user.model';
import { RegisterModel } from 'src/app/login/register-form/register-model';

@Injectable()
export class UserApi {
    constructor(private apiclient: APIClient){

    }

    registerAccount(registrationData: RegisterModel){
        return this.apiclient.post<void>('api/users/register', registrationData);
    }

    loginUser(username: string, password: string){
        const data = {
            username,
            password
        }
        return this.apiclient.post<User>('api/users/authenticate', data);
    }
}