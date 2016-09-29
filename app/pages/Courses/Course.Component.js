"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var Course_Service_1 = require('../Courses/Course.Service');
var core_1 = require('@angular/core');
var ionic_angular_1 = require('ionic-angular');
var CoursesPage = (function () {
    function CoursesPage(navCtrl, courseService) {
        this.navCtrl = navCtrl;
        this.courseService = courseService;
    }
    CoursesPage.prototype.ngOnInit = function () {
        console.log(this.courses);
        this.subscribeCourses();
    };
    CoursesPage.prototype.subscribeCourses = function () {
        var _this = this;
        this.courseService.getCourse()
            .subscribe(function (res) { return _this.courses = res; });
    };
    CoursesPage = __decorate([
        core_1.Component({
            providers: [Course_Service_1.CourseService],
            templateUrl: 'build/pages/Courses/Courses.Component.html'
        }), 
        __metadata('design:paramtypes', [ionic_angular_1.NavController, Course_Service_1.CourseService])
    ], CoursesPage);
    return CoursesPage;
}());
exports.CoursesPage = CoursesPage;
