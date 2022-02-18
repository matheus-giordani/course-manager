import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule} from '@angular/common/http'


import { NgxSpinnerModule } from "ngx-spinner";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { CourseListComponent } from './course/course-list.component';
import { RatingStarComponent } from './rating-star/rating-star.component';
import { ReplacePipe } from './pipe/replace.pipe';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { CourseInfoComponent } from './course-info/course-info.component';
import { AppRoutingModule } from './app.raunting.module';

@NgModule({
  declarations: [//ONDE VAI SER DECLARADO TODOS OS COMPONENTS
    AppComponent, CourseListComponent, RatingStarComponent, ReplacePipe, NavBarComponent, PageNotFoundComponent, CourseInfoComponent,
  ],
  imports: [
    BrowserModule, FormsModule, AppRoutingModule, NgxSpinnerModule,BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
