import { Component } from '@angular/core';
import { Http } from '@angular/http';

@Component({
    selector: 'fetchdata',
    templateUrl: './fetchdata.component.html',
    styleUrls: ['./fetchdata.component.css']
})
export class FetchDataComponent {
    public forecasts: WeatherForecast[];
    public posts: Post[];

    constructor(http: Http) {
        http.get('http://jsonplaceholder.typicode.com/posts').subscribe(result => {
            // this.forecasts = result.json() as WeatherForecast[];
            this.posts = result.json() as Post[];
        });
    }

    printPage() {
        console.log('print page');
        window.print();
    }

}

interface WeatherForecast {
    dateFormatted: string;
    temperatureC: number;
    temperatureF: number;
    summary: string;
}

export class Post
{
    userId: number;
    id: number;
    title: string;
    body: string;
}