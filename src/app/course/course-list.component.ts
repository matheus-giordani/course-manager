import { Component, OnInit } from '@angular/core';

import { CourseService } from './course.service';
import { Course } from './interface';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css'],
})
export class CourseListComponent implements OnInit {
  filteredCourses: Course[] = [];
  

  _courses: Course[] = [];
  _filterBy!: string;

  //injetando dependencia ou seja estou injetando todos os metodos que esse serviço desenvolve para evitar replicação de codigo
  constructor(private courseService: CourseService) {}

  ngOnInit(): void {
    this._courses = this.courseService.getAll();
    this.filteredCourses = this._courses;
  }

  set filter(value: string) {
    this._filterBy = value;

    //fazendo filtro a partir do valor informado no input
    this.filteredCourses = this._courses.filter((course: Course) =>
      course.name.toLowerCase().indexOf(this._filterBy.toLowerCase()) > -1);



  }

  get filter() {
    return this._filterBy;
  }
}


