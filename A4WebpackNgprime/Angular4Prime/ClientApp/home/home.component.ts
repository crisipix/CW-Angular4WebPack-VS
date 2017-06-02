import { Component } from '@angular/core';

@Component({
    selector: 'home',
    templateUrl: './home.component.html'
})
export class HomeComponent {
    displayDialog: boolean;

    car: Car = new PrimeCar();

    selectedCar: Car;

    newCar: boolean;

    cars: Car[];
    value: Date;

    constructor() { }

    ngOnInit() {
        
    }

    showDialogToAdd() {
        this.newCar = true;
        this.car = new PrimeCar();
        this.displayDialog = true;
    }
}
export class PrimeCar implements Car {
    vin?;
    year?;
    brand?;
    color?;
}

export interface Car {
    vin?;
    year?;
    brand?;
    color?;
}