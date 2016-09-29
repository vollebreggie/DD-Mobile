"use strict";
var StreamViewModel = (function () {
    function StreamViewModel(streams, comments, user, date) {
        this.streams = streams;
        this.comments = comments;
        this.user = user;
        this.date = date;
    }
    return StreamViewModel;
}());
exports.StreamViewModel = StreamViewModel;
