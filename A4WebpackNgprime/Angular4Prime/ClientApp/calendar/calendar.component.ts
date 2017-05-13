import { Component, OnInit } from '@angular/core';
import { CalendarService } from '../services/calendar.service';
import 'fullcalendar';

/*
    https://github.com/primefaces/primeng/issues/255
    add module to app module 
    add import 'jquery';
    install fullcalendar
    add fullcalendar to vendor config
    add 'fullcalendar/dist/fullcalendar.min.css' to vendor config
    import full calendar here. 
    
*/
@Component({
    selector: 'calendar',
    templateUrl: './calendar.component.html'
})
export class CalendarComponent implements OnInit
{
    calendarService: CalendarService;
    events: any[];
    headerConfig: any;
    selectedEvent: any;

    constructor(calendarService: CalendarService) {
        this.calendarService = calendarService;
    }

    ngOnInit() {
        this.selectedEvent = {title : 'Selected Event'};
        this.headerConfig = {
            left: 'prev,next today',
            center: 'title',
            right: 'month,agendaWeek,agendaDay'
        };

        this.calendarService.getEvents()
            .subscribe(evs => { this.events = evs; });

    }

    handleEventClick(e) {
        console.log(e);
        console.log(e.calEvent);
        this.selectedEvent = e.calEvent.title;
        //e.event = Selected event
        //e.jsEvent = Browser click event
        //e.view = Current view object
    }

    //events: any[];

    //ngOnInit() {
    //    this.events = [
    //        {
    //            "title": "All Day Event",
    //            "start": "2017-05-13"
    //        },
    //        {
    //            "title": "Long Event",
    //            "start": "2017-05-07",
    //            "end": "2017-05-10"
    //        },
    //        {
    //            "title": "Repeating Event",
    //            "start": "2017-05-09T16:00:00"
    //        },
    //        {
    //            "title": "Repeating Event",
    //            "start": "2017-05-16T16:00:00"
    //        },
    //        {
    //            "title": "Conference",
    //            "start": "2017-05-21",
    //            "end": "2017-05-23"
    //        }
    //    ];
    //}
}

