"use strict";
var Comment = (function () {
    function Comment(content_id, content, date, user) {
        this.content_id = content_id;
        this.content = content;
        this.date = date;
        this.user = user;
    }
    return Comment;
}());
exports.Comment = Comment;
