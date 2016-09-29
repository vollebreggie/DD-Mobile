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
var common_1 = require('@angular/common');
var DynamicFormQuestionComponent = (function () {
    function DynamicFormQuestionComponent(_zone) {
        this._zone = _zone;
        this.imageProcess = null;
        this.imageLink = null;
    }
    //  get isValid() { return this.form.controls[this.question.key].valid; }
    DynamicFormQuestionComponent.prototype.success = function (response) {
        var _this = this;
        this._zone.run(function () {
            //     this.form.controls[this.question.key].updateValue(parseInt(response.response));
            //    this.form.controls[this.question.key].markAsTouched();
            _this.imageProcess = "Success";
            setTimeout(function () {
                _this.imageProcess = null;
            }, 2000);
        });
    };
    DynamicFormQuestionComponent.prototype.failed = function (error) {
        var _this = this;
        this._zone.run(function () {
            _this.imageLink = null;
            _this.imageProcess = "Upload error, please try again";
            setTimeout(function () {
                _this.imageProcess = null;
            }, 2000);
        });
    };
    // Upload an image to the server and add the campaign and question ID.
    // This will allow background processing of the image
    DynamicFormQuestionComponent.prototype.uploadImage = function (key) {
        var _this = this;
        var options = {
            quality: 50,
            destinationType: 1,
            allowEdit: false,
            targetWidth: 800,
            targetHeight: 600
        };
        ionic_native_1.Camera.getPicture(options).then(function (imageData) {
            _this.imageLink = imageData;
            _this.imageProcess = "Uploading";
            // Upload the file
            //        this.ft = new FileTransfer();
            //       var filename = "q" + this.question.key + ".jpg";
            //        var options = new FileUploadOptions();
            //options.fileKey = "file";
            //options.fileName = filename;
            //options.mimeType = "image/jpeg";
            //options.chunkedMode = false;
            //options.headers = {
            //    'Content-Type': undefined,
            //    'Authorization': 'Bearer ' + localStorage.getItem('id_token') // this should send through the JWT
            //};
            //options.params = {
            //    questionId: this.question.key,
            //    taskId: this.taskID,
            //    fileName: filename
            //};
            _this.ft.upload(imageData, "http://app.com/api/v1/image/save", _this.success.bind(_this), _this.failed.bind(_this), options);
        }, function (err) {
            _this.imageProcess = "Camera Error";
            setTimeout(function () {
                _this.imageProcess = null;
            }, 2000);
        });
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', common_1.ControlGroup)
    ], DynamicFormQuestionComponent.prototype, "form", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DynamicFormQuestionComponent.prototype, "idx", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DynamicFormQuestionComponent.prototype, "taskID", void 0);
    DynamicFormQuestionComponent = __decorate([
        core_1.Component({
            selector: 'df-question',
            templateUrl: 'build/components/dynamic-form-question/dynamic-form-question.component.html'
        }), 
        __metadata('design:paramtypes', [core_1.NgZone])
    ], DynamicFormQuestionComponent);
    return DynamicFormQuestionComponent;
}());
exports.DynamicFormQuestionComponent = DynamicFormQuestionComponent;
