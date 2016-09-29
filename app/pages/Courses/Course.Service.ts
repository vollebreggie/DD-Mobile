import { Course } from '../Courses/Course.ViewModel';
import { Injectable } from '@angular/core';
import { Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';


@Injectable()
export class CourseService {

    private courseUrl = 'http://localhost:5000/api/courses';
    private courses: Course[];

    constructor(private http: Http) { }

    getCourse() {  
        return this.http.get(this.courseUrl)
            .map((responseData) => {
                console.log(responseData.json)
                return responseData.json();
            });
    }
       
    addCourse(course) {
        console.log(course);
        var headers = new Headers({ 'Content-Type': 'application/json' });
        return this.http.post('api/members', JSON.stringify(course),
            { headers: headers })
            .map(response => { });
    }

    DeleteCourse(course) {
        console.log(course);
        return this.http.delete(`api/members/${course.id}`)
            .map(response => { });
    }

    UpdateCourse(course) {
        console.log(course);
        var headers = new Headers({ 'Content-Type': 'application/json' });
        return this.http.put('api/members', JSON.stringify(course),
            { headers: headers })
            .map(response => {});
    }


    
}