import { CourseService } from '../Courses/Course.Service';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Course } from '../Courses/Course.ViewModel';

@Component({
    providers: [CourseService],
    templateUrl: 'build/pages/Courses/Courses.Component.html'
})

export class CoursesPage {

    courses: Course[];

    constructor(private navCtrl: NavController, private courseService: CourseService) { 

    }

    ngOnInit() {
        console.log(this.courses);
        this.subscribeCourses();
    }

    subscribeCourses() {
        this.courseService.getCourse()
            .subscribe(res => this.courses = res);
    
    }
}