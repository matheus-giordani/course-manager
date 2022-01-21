import { CourseService } from './../course/course.service';
import { Course } from './../course/interface';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-course-info',
  templateUrl: './course-info.component.html',
  styleUrls: ['./course-info.component.css']
})
export class CourseInfoComponent implements OnInit {
  course!: Course;
  constructor(private activatedRoute: ActivatedRoute, private courseService: CourseService, private spinner: NgxSpinnerService) { }

  ngOnInit(): void {
    this.spinner.show();

    setTimeout(() => {
      this.spinner.hide();
      this.get()
    }, 1000);


  }
  get() {
    this.course = this.courseService.getById(+this.activatedRoute.snapshot.paramMap.get('id')!);
  }
}
