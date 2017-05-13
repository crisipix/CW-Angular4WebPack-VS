import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { GetCalendarEvents } from '../data/data';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class CalendarService {

    constructor(private http: Http) { }

    getEvents(): Observable<any[]> {
        return new Observable(obs => {
            setTimeout(() => { obs.next(GetCalendarEvents()) }, 200);
            setTimeout(() => { obs.complete(); }, 200);
        });
        //return this.http.get('showcase/resources/data/scheduleevents.json')
        //    .toPromise()
        //    .then(res => <any[]>res.json().data)
        //    .then(data => { return data; });
    }
}