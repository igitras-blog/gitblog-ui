import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import 'materialize-css';
import { MaterializeModule } from 'angular2-materialize';
import { LibsComponent } from './libs.component';
import { PagerComponent } from './pager/pager.component';
import { PaginationComponent } from './pagination/pagination.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        MaterializeModule
    ],
    declarations: [
        LibsComponent,
        PagerComponent,
        PaginationComponent
    ],
    exports: [
        LibsComponent,
        PagerComponent,
        PaginationComponent
    ]
})
export class LibsModule {
}
