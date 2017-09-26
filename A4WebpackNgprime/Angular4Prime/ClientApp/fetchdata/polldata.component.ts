import { Component } from '@angular/core';
import { Http } from '@angular/http';
import { Post } from './fetchdata.component';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

@Component({
    selector: 'polldata',
    templateUrl: './polldata.component.html',
    styleUrls: ['./polldata.component.css']
})
export class PollDataComponent {
   
    public posts: Post[];
    public allPosts: Post[];
    public _http: Http;

    subject$: BehaviorSubject<Post[]>;
    constructor(http: Http) {
        this._http = http;
        this.subject$ = new BehaviorSubject<Post[]>([]);
        this.subject$.concatMap(s => Observable.of(this.GetPosts()).delay(4000))
            .do(s => { this.subject$.next([]) })
            .subscribe(r => { console.log('post results',this.posts); });
        //this.GetPosts();

        //Observable.interval(5000)
        //    .switchMap(() => {
        //        this.posts = null;
        //        return this._http.get('http://jsonplaceholder.typicode.com/posts');
        //    })
        //    .subscribe(result => {
        //        setTimeout(() => {
        //            this.allPosts = result.json() as Post[];
        //            let rand = Math.floor(Math.random() * 6) + 1;
        //            this.posts = this.allPosts.splice(0, rand);
        //        }, 2000);
        //    });

    }
    GetPosts() {
        return this._http.get('http://jsonplaceholder.typicode.com/posts')
                .subscribe(result => {
                    setTimeout(() => {
                        this.allPosts = result.json() as Post[];
                        let rand = Math.floor(Math.random() * 6) + 1;
                        this.posts = this.allPosts.splice(0, rand);
                    }, 4000);
                });
    }
}

 