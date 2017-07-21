import { Component } from '@angular/core';
import { Http } from '@angular/http';
import { Post } from './fetchdata.component';

@Component({
    selector: 'scrolldata',
    templateUrl: './scrolldata.component.html',
    styleUrls: ['./scrolldata.component.css']
})
export class ScrollDataComponent {
    start: number = 0;
    end: number = 10;
    public posts: Post[];
    public allPosts: Post[];
    constructor(http: Http) {
        http.get('http://jsonplaceholder.typicode.com/posts').subscribe(result => {
            this.allPosts = result.json() as Post[];
            this.posts = this.allPosts.slice(this.start, this.end);
        });
    }

    printPage() {
        console.log('print page');
        window.print();
    }

    onScroll(e : any)
    {        
        var h = document.documentElement,
            b = document.body,
            st = 'scrollTop',
            sh = 'scrollHeight';

        var percent = (h[st] || b[st]) / ((h[sh] || b[sh]) - h.clientHeight) * 100;

        if (!this.allPosts || this.allPosts.length == 0) { return; }
        if ( percent < 75 ) { return; }

        this.end = this.end + 10;
        this.posts = this.allPosts.slice(this.start, this.end);
        console.log('event', e);
        console.log('scroll', window.scrollY);
        console.log('scroll', percent);
      
    }

}

 