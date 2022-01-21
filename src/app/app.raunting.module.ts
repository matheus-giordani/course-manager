import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CourseInfoComponent } from './course-info/course-info.component';
import { CourseListComponent } from './course/course-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';


const routes: Routes = [
  {
    path: 'courses', component: CourseListComponent
  },
  {path: 'courses_info/:id', component: CourseInfoComponent},
  {
    path: '', redirectTo: 'courses', pathMatch:'full'
  },
  {
    path: '**', component: PageNotFoundComponent
  },

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
