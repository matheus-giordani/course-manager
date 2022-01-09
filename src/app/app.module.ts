import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CourseListComponent } from './course/course-list.component';
import { RatingStarComponent } from './rating-star/rating-star.component';

@NgModule({
  declarations: [//ONDE VAI SER DECLARADO TODOS OS COMPONENTS
    AppComponent, CourseListComponent, RatingStarComponent
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
