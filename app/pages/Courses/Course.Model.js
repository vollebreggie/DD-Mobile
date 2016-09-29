"use strict";
var Course = (function () {
    function Course(id, name, content) {
        this.id = id;
        this.name = name;
        this.content = content;
    }
    return Course;
}());
exports.Course = Course;
