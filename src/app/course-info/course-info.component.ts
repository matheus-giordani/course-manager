import { error } from '@angular/compiler/src/util';
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

    this.get()



  }
  get() {
    return this.courseService.getById(+this.activatedRoute.snapshot.paramMap.get('id')!).subscribe({
      next: f => {this.course = f
        setTimeout(() => {
          this.spinner.hide();
        }, 500);
      },
      error: err => console.log("Erro", err)

    });
  }
  save(){
    this.courseService.save(this.course).subscribe({
      next: course => console.log('Saved with success', course),
      error: err => console.log(err)


    })
  }
}
