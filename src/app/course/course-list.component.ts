import { Component, OnInit } from '@angular/core';

import { CourseService } from './course.service';
import { Course } from './interface';

@Component({
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css'],
})
export class CourseListComponent implements OnInit {
  filteredCourses: Course[] = [];
  del: boolean = false

  _courses: Course[] = [];
  _filterBy!: string;

  //injetando dependencia ou seja estou injetando todos os metodos que esse serviço desenvolve para evitar replicação de codigo
  constructor(private courseService: CourseService) {}

  ngOnInit(): void {
    this.getAll();
  }

  getAll(): void {
    this.courseService.getAll().subscribe({
      next: (f) => {
        this._courses = f;
        this.filteredCourses = this._courses;
        console.log(this._courses);
      },
      error: (err) => console.log('Erros', err),
    });
  }

  set filter(value: string) {
    this._filterBy = value;

    //fazendo filtro a partir do valor informado no input
    this.filteredCourses = this._courses.filter(
      (course: Course) =>
        course.name.toLowerCase().indexOf(this._filterBy.toLowerCase()) > -1
    );
  }

  get filter() {
    return this._filterBy;
  }

  delete(id:number){
    return this.courseService.deleteByid(id).subscribe({
      next: f => {
        this.del = true
        setTimeout(() => {
          this.del = false
          this.getAll()

        }, 1000);

      }
    })
  }
}
