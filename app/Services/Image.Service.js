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
var ionic_native_1 = require('ionic-native');
var ImageService = (function () {
    function ImageService() {
    }
    //guess i know now
    ImageService.prototype.getPictureFromCameraFront = function () {
        var options = {
            quality: 50,
            destinationType: 1,
            allowEdit: false,
            targetWidth: 800,
            targetHeight: 600,
            cameraDirection: 1,
            pictureSourceType: 1
        };
        ionic_native_1.Camera.getPicture(options).then(function (imageData) {
            // imageData is either a base64 encoded string or a file URI
            // If it's base64:
            var base64Image = 'data:image/jpeg;base64,' + imageData;
            return base64Image;
        }, function (err) {
            // Handle error
        });
    };
    ImageService.prototype.getPictureFromCameraBack = function () {
        var options = {
            quality: 50,
            destinationType: 1,
            allowEdit: false,
            targetWidth: 800,
            targetHeight: 600,
            cameraDirection: 0,
            pictureSourceType: 1
        };
        ionic_native_1.Camera.getPicture(options).then(function (imageData) {
            // imageData is either a base64 encoded string or a file URI
            // If it's base64:
            var base64Image = 'data:image/jpeg;base64,' + imageData;
            return base64Image;
        }, function (err) {
            // Handle error
        });
    };
    ImageService.prototype.getPictureFromLibrary = function () {
        var options = {
            quality: 50,
            destinationType: 1,
            allowEdit: false,
            targetWidth: 800,
            targetHeight: 600,
            pictureSourceType: 0,
            saveToPhotoAlbum: true
        };
        ionic_native_1.Camera.getPicture(options).then(function (imageData) {
            // imageData is either a base64 encoded string or a file URI
            // If it's base64:
            var base64Image = 'data:image/jpeg;base64,' + imageData;
            console.log(base64Image);
        }, function (err) {
            // Handle error
        });
    };
    //@parameter direction
    //BACK -0- use the back facing camera
    //FRONT -1- use the front facing camer
    //@parameter pictureSourceType
    //PHOTOLIBRARY -0- Choose image from the device's photo library(same as SAVEDPHOTOALBUM for android)
    //CAMERA -1- Take a picture from the camera
    //SAVEDPHOTOALBUM -2-  Choose image ony from the device's camera roll album(same as PHOTOLIBRARY for android)
    //@parameter mediaType
    //PICTURE -0-  allow selection of still pictures only. As default it will return format specified via DestinationType
    //VIDEO -1- allow selection of vicdo only, ONLY RETURNS URL
    //ALLMEDIA -2- allow selection from all media types
    //@parameter destinationType
    //DATA_URL -0- return base64 encoded string. DATA_URL can be very memory intensive and cause app crashes or out of memory erros. Use FILE_URI OR NATIE_URI if possible
    //FILE_URI -1- Returns file uri
    //NATIVE_URI -2- Returns native uri
    ImageService.prototype.getPicture = function (direction, pictureSourceType, mediaType, destinationType) {
        var options = {
            quality: 50,
            allowEdit: false,
            targetWidth: 800,
            targetHeight: 600,
            pictureSourceType: 0,
            saveToPhotoAlbum: true,
            //parameters
            DestinationType: destinationType,
            MediaType: mediaType,
            Direction: direction,
            PictureSourceType: pictureSourceType
        };
        ionic_native_1.Camera.PictureSourceType;
        ionic_native_1.Camera.getPicture(options).then(function (imageData) {
            // imageData is either a base64 encoded string or a file URI
            // If it's base64:
            var base64Image = 'data:image/jpeg;base64,' + imageData;
        }, function (err) {
            // Handle error
        });
    };
    ImageService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], ImageService);
    return ImageService;
}());
exports.ImageService = ImageService;
