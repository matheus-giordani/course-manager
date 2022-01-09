import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { CourseListComponent } from './course/course-list.component';
import { RatingStarComponent } from './rating-star/rating-star.component';
import { ReplacePipe } from './pipe/replace.pipe';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
  declarations: [//ONDE VAI SER DECLARADO TODOS OS COMPONENTS
    AppComponent, CourseListComponent, RatingStarComponent, ReplacePipe, NavBarComponent, PageNotFoundComponent
  ],
  imports: [
    BrowserModule, FormsModule,RouterModule.forRoot([
      {
        path: '', redirectTo: 'courses', pathMatch:'full'
      },
      {
        path: 'courses', component: CourseListComponent
      },
      {
        path: '**', component: PageNotFoundComponent
      }

    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
