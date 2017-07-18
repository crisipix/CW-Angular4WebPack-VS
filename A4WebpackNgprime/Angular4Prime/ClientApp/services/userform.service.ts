import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { GetUserModel } from '../data/data';
import { Observable } from 'rxjs/Observable';

@Injectable()
///You may concat the 2 observables and get the first emitted value:
//var userIdStream = Rx.Observable.concat(cookieUserIdStream, userIdRequest).first();
export class UserFormService {
    currentUser: any;
    constructor(private http: Http) { }

    getUser(): Observable<any> {
        if (this.currentUser) {
            return new Observable(obs => {
                setTimeout(() => { obs.next(this.currentUser)},100);
                setTimeout(() => { obs.complete(); }, 100);
            }); }
        return new Observable(obs => {
            setTimeout(() => { obs.next(GetUserModel()) }, 100);
            setTimeout(() => { obs.complete(); }, 100);
        });
    }

    setUser(user: any): void {
        console.log(user);
        this.currentUser = user;
    }

    findUser(name: string) : string{
        console.log(name);
        return name;
    }
}