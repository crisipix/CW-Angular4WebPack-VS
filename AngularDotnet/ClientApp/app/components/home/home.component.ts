import { Component } from '@angular/core';

@Component({
    selector: 'home',
    templateUrl: './home.component.html'
})
export class HomeComponent {
    name : string;

    constructor(){
        this.name = 'Chris';
    }
}
