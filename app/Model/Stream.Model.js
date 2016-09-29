"use strict";
var Stream = (function () {
    function Stream(stream_id, titel, content, picture) {
        this.stream_id = stream_id;
        this.titel = titel;
        this.content = content;
        this.picture = picture;
    }
    return Stream;
}());
exports.Stream = Stream;
