import { Component, OnInit, AfterViewInit, ElementRef, ViewChild, Renderer2} from '@angular/core';
import { CalendarService } from '../services/calendar.service';
import 'fullcalendar';
import * as $ from 'jquery';

//declare var $: any;
//declare var $: any;// this is very importnant (to work this line: this.modalEl.modal('show')) - don't do this (becouse this owerride jQuery which was changed by bootstrap, included in main html-body template): let $ = require('../../../../../node_modules/jquery/dist/jquery.min.js');

/*
    https://github.com/primefaces/primeng/issues/255
    add module to app module 
    add import 'jquery';
    install fullcalendar
    add fullcalendar to vendor config
    add 'fullcalendar/dist/fullcalendar.min.css' to vendor config
    import full calendar here. 

use either the open button's click trigger to open the modal
or just call the modal via jquery.
*/
@Component({
    selector: 'calendar',
    templateUrl: './calendar.component.html'
})
export class CalendarComponent implements OnInit, AfterViewInit 
{
    calendarService: CalendarService;
    rootNode: ElementRef;
    events: any[];
    headerConfig: any;
    selectedEvent: any;
    allDay: boolean;
    startDate: Date;
    endDate: Date;
   modalEl = null;
    //@ViewChild('modalEl') modalEl: any; // doesnt work
    @ViewChild('open') openmodal: ElementRef; 
        
    constructor(calendarService: CalendarService, rootNode: ElementRef, private rd: Renderer2) {
        this.calendarService = calendarService;
        this.rootNode = rootNode;
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

    ngAfterViewInit() {
        //this.modalEl = $(this.rootNode.nativeElement).find('div.modal');
        
    }

    //https://medium.com/tixdo-labs/angular-2-modal-using-bootstrap-97b4dad11dcc
    handleEventClick(e) {
        console.log(e);
        console.log(e.calEvent);
        this.selectedEvent = e.calEvent.title;
        this.allDay = e.calEvent._allDay;
        this.startDate = e.calEvent.start;
        this.endDate = e.calEvent.end;

        //this.openmodal.nativeElement.click();
        $('#basicModal2').modal('show');
        //this.modalEl.modal('show');
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

