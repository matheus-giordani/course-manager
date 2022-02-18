import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Course } from './interface';

@Injectable({
  providedIn: 'root',
})
export class CourseService {
  constructor(private httpClient: HttpClient) {}
  private url: string = 'http://localhost:3000/COURSES';

  getAll(): Observable<Course[]> {
    return this.httpClient.get<Course[]>(this.url);
  }

  getById(id: number): Observable<Course> {
    return this.httpClient.get<Course>(`${this.url}/${id}`);
  }
  save(course: Course): Observable<Course> {
    if (course.id) {
      return this.httpClient.put<Course>(`${this.url}/${course.id}`, course);
    } else {
      return this.httpClient.post<Course>(`${this.url}`, course);
    }
  }

  deleteByid(id: number) :Observable<any>{
    return this.httpClient.delete<any>(`${this.url}/${id}`)
  }
}
