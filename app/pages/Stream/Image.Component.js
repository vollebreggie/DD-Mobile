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
var core_1 = require("@angular/core");
var ionic_native_1 = require('ionic-native');
var UploadButton = (function () {
    function UploadButton() {
        this.options = {
            maximumImagesCount: 10,
            width: 800,
            height: 800,
            quality: 80
        };
    }
    UploadButton.prototype.getImager = function () {
        ionic_native_1.ImagePicker.getPictures(this.options).then(function (results) {
            for (var i = 0; i < results.length; i++) {
                console.log('Image URI: ' + results[i]);
            }
        }, function (err) { });
    };
    UploadButton = __decorate([
        core_1.Component({
            selector: "upload-button",
            template: 'build/pages/Stream/Image.Component.html'
        }), 
        __metadata('design:paramtypes', [])
    ], UploadButton);
    return UploadButton;
}());
exports.UploadButton = UploadButton;
