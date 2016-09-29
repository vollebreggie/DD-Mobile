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
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
require('rxjs/add/operator/map');
require('rxjs/add/operator/catch');
var CourseService = (function () {
    function CourseService(http) {
        this.http = http;
        this.courseUrl = 'http://localhost:5000/api/courses';
    }
    CourseService.prototype.getCourse = function () {
        return this.http.get(this.courseUrl)
            .map(function (responseData) {
            console.log(responseData.json);
            return responseData.json();
        });
    };
    CourseService.prototype.addCourse = function (course) {
        console.log(course);
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        return this.http.post('api/members', JSON.stringify(course), { headers: headers })
            .map(function (response) { });
    };
    CourseService.prototype.DeleteCourse = function (course) {
        console.log(course);
        return this.http.delete("api/members/" + course.id)
            .map(function (response) { });
    };
    CourseService.prototype.UpdateCourse = function (course) {
        console.log(course);
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        return this.http.put('api/members', JSON.stringify(course), { headers: headers })
            .map(function (response) { });
    };
    CourseService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], CourseService);
    return CourseService;
}());
exports.CourseService = CourseService;
