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
var Stream_Service_1 = require('../../Services/Stream.Service');
var Image_Service_1 = require('../../Services/Image.Service');
var core_1 = require('@angular/core');
var ionic_angular_1 = require('ionic-angular');
var forms_1 = require('@angular/forms');
var Watch_1 = require('../../Common/Watch');
var ionic_native_1 = require('ionic-native');
var StreamFormUpdateComponent = (function () {
    //constructor
    function StreamFormUpdateComponent(navCtrl, formBuilder, streamService, imageService) {
        this.navCtrl = navCtrl;
        this.formBuilder = formBuilder;
        this.streamService = streamService;
        this.imageService = imageService;
        this.source = "build/images/test.png";
        this.sourcebase64 = "build/images/test.png";
        // this.images = ["build/images/test.png", "build/images/profilepicture.jpg"];
        this.streams = [];
    }
    //form functionality
    StreamFormUpdateComponent.prototype.ionViewLoaded = function () {
        this.updateForm = this.formBuilder.group({
            title: ['', forms_1.Validators.required],
            description: [''],
        });
    };
    //images utilities
    StreamFormUpdateComponent.prototype.getImage = function () {
        this.imageService.getPictureFromCameraFront();
    };
    StreamFormUpdateComponent.prototype.getPictureFromCameraFront = function () {
        var _this = this;
        var options = {
            quality: 50,
            destinationType: 0,
            allowEdit: false,
            targetWidth: 800,
            targetHeight: 600,
            pictureSourceType: 0
        };
        ionic_native_1.Camera.getPicture(options).then(function (imageData) {
            // imageData is either a base64 encoded string or a file URI
            // If it's base64:
            _this.source = imageData;
            _this.sourcebase64 = imageData + ';base64';
            console.log(imageData);
            return imageData;
        }, function (err) {
            // Handle error
        });
    };
    StreamFormUpdateComponent.prototype.takePicture = function () {
        var _this = this;
        ionic_native_1.Camera.getPicture({
            destinationType: ionic_native_1.Camera.DestinationType.DATA_URL,
            targetWidth: 1000,
            targetHeight: 1000
        }).then(function (imageData) {
            // imageData is a base64 encoded string
            _this.base64Image = "data:image/jpeg;base64," + imageData;
        }, function (err) {
            console.log(err);
        });
    };
    //CRUD new stream
    StreamFormUpdateComponent.prototype.addStream = function () {
    };
    StreamFormUpdateComponent.prototype.deleteStream = function () {
    };
    //upload/submit
    StreamFormUpdateComponent.prototype.submitStream = function () {
    };
    //common functionallity
    StreamFormUpdateComponent.prototype.getStream = function (counter) {
        return this.streams[counter];
    };
    StreamFormUpdateComponent.prototype.createStream = function (title, content, image) {
        var stream = {
            titel: title,
            content: content,
            picture: image
        };
        return stream;
    };
    StreamFormUpdateComponent.prototype.addStreamToList = function (newStream) {
        this.streams.push(newStream);
    };
    //logging
    StreamFormUpdateComponent.prototype.logForm = function () {
        console.log(this.updateForm.value);
    };
    StreamFormUpdateComponent = __decorate([
        core_1.Component({
            directives: [Watch_1.Watch],
            templateUrl: 'build/pages/Stream/Stream-FormUpdate.Component.html'
        }), 
        __metadata('design:paramtypes', [ionic_angular_1.NavController, forms_1.FormBuilder, Stream_Service_1.StreamService, Image_Service_1.ImageService])
    ], StreamFormUpdateComponent);
    return StreamFormUpdateComponent;
}());
exports.StreamFormUpdateComponent = StreamFormUpdateComponent;
