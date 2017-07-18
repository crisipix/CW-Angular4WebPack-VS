import { Component, OnInit, Input, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { UserFormService } from '../services/userform.service';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/throttleTime';
import 'rxjs/add/observable/fromEvent';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/map';

@Component({
    selector: 'userform',
    templateUrl: './userform.edit.component.html',
    styleUrls: ['./userform.edit.component.css']
})

export class UserFormEditComponent {
    stateCtrl: FormControl;
    filteredStates: any;
    userModel: any;

    // Use subject
    username: string;
    foundname: string;
    usernameChanged: Subject<string> = new Subject<string>();

    // Using Form Control
    lookup : string = "";
    lookupControl = new FormControl();

    states = [
        'Alabama',
        'Alaska',
        'Arizona',
        'Arkansas',
        'California',
        'Colorado',
        'Connecticut',
        'Delaware',
        'Florida',
        'Georgia',
        'Hawaii',
        'Idaho',
        'Illinois',
        'Indiana',
        'Iowa',
        'Kansas',
        'Kentucky',
        'Louisiana',
        'Maine',
        'Maryland',
        'Massachusetts',
        'Michigan',
        'Minnesota',
        'Mississippi',
        'Missouri',
        'Montana',
        'Nebraska',
        'Nevada',
        'New Hampshire',
        'New Jersey',
        'New Mexico',
        'New York',
        'North Carolina',
        'North Dakota',
        'Ohio',
        'Oklahoma',
        'Oregon',
        'Pennsylvania',
        'Rhode Island',
        'South Carolina',
        'South Dakota',
        'Tennessee',
        'Texas',
        'Utah',
        'Vermont',
        'Virginia',
        'Washington',
        'West Virginia',
        'Wisconsin',
        'Wyoming',
    ];

    userService: UserFormService;
    constructor(private _userService: UserFormService) {
        this.userService = _userService;
        this.stateCtrl = new FormControl();
        this.filteredStates = this.stateCtrl.valueChanges
            .startWith(null)
            .map(name => this.filterStates(name));

        this.userModel = {
            State: '',
            FirstName: '',
            LastName: '',
            Address: "",
            Address2: "",
            City: "",
            ZipCode: "12345",
            Birthdate: ""
        };

        // debounce
        this.usernameChanged
            .debounceTime(400) // wait 400ms after the last event before emitting last event
            //.distinctUntilChanged() // only emit if value is different from previous value
            .subscribe(model => {
                this.username = model;
                this.foundname = this.userService.findUser(this.username);
            });

        this.lookupControl
            .valueChanges
            .debounceTime(400) // wait 400ms after the last event before emitting last event
            .subscribe(model => {
                this.username = model;
                this.foundname = this.userService.findUser(this.username);
            })
    }

    ngOnInit() {
        this.userService.getUser().subscribe(u => this.userModel = u);
    }
    save() {
        console.log(this.userModel);
        this.userService.setUser(this.userModel);
    }

    filterStates(val: string) {
        return val ? this.states.filter(s => new RegExp(`^${val}`, 'gi').test(s))
            : this.states;
    }

    // output the next result. 
    userChanged(text: string) {
        this.usernameChanged.next(text);
    }

    findUser(name: string): string
    {
        var result = this.userService.findUser(name);
        this.username = result;
        return result;
    }


}