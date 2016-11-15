import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'app works!';

    currentPage:number = 3;

    viewPage(page:number) {
        this.currentPage = page;
        console.log("current page is : " + page);
    }

    nextPage() {
        console.log("next page");
    }

    previousPage() {
        console.log("previous page");
    }
}
