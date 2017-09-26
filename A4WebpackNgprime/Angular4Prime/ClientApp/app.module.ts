import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { ReactiveFormsModule } from '@angular/forms';  
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '@angular/material';


import 'hammerjs';

import { AccordionModule, InputTextModule, DataTableModule, ButtonModule, DialogModule } from 'primeng/primeng';
import { ScheduleModule } from 'primeng/primeng';
import { CalendarModule } from 'primeng/primeng';
import { MdInputModule } from '@angular/material';
import { MdAutocompleteModule } from '@angular/material';
import { MdNativeDateModule } from '@angular/material';
import { MdDatepickerModule } from '@angular/material';
import { MdSidenavModule } from '@angular/material';
import { AppComponent } from './app.component';
import { NavMenuComponent } from './navmenu/navmenu.component';
import { HomeComponent } from './home/home.component';
import { FetchDataComponent } from './fetchdata/fetchdata.component';
import { CounterComponent } from './counter/counter.component';
import { CalendarComponent } from './calendar/calendar.component';
import { CalendarService } from './services/calendar.service';
import { UserFormComponent } from './form/userform.component';
import { UserFormEditComponent } from './form/userform.edit.component';
import { UserFormService } from './services/userform.service';
import { ScrollDataComponent } from './fetchdata/scrolldata.component';
import { PollDataComponent } from './fetchdata/polldata.component';

@NgModule({
    bootstrap: [ AppComponent ],
    declarations: [
        AppComponent,
        NavMenuComponent,
        CounterComponent,
        FetchDataComponent,
        HomeComponent,
        CalendarComponent,
        UserFormComponent,
        UserFormEditComponent,
        ScrollDataComponent,
        PollDataComponent
    ],
    providers: [CalendarService, UserFormService],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        HttpModule,
        FormsModule,
        ReactiveFormsModule,
        MaterialModule,
        MdInputModule,
        MdAutocompleteModule,
        MdDatepickerModule,
        MdNativeDateModule,
        AccordionModule,
        InputTextModule,
        DataTableModule,
        ButtonModule,
        DialogModule,
        ScheduleModule,
        CalendarModule,
        RouterModule.forRoot([
            { path: '', redirectTo: 'home', pathMatch: 'full' },
            { path: 'home', component: HomeComponent },
            { path: 'counter', component: CounterComponent },
            { path: 'calendar', component: CalendarComponent },
            { path: 'fetch-data', component: FetchDataComponent },
            { path: 'scroll-data', component: ScrollDataComponent },
            { path: 'form', component: UserFormComponent },
            { path: 'form/edit', component: UserFormEditComponent },
            { path: 'poll-data', component: PollDataComponent},
            { path: '**', redirectTo: 'home' }
        ])
    ]
})
export class AppModule {
}
