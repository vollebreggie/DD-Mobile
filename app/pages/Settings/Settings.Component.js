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
var ionic_angular_1 = require('ionic-angular');
var ionic_native_1 = require('ionic-native');
var SettingsPage = (function () {
    function SettingsPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    SettingsPage.prototype.takePicture = function () {
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
    SettingsPage.prototype.getPicture = function () {
        var _this = this;
        ionic_native_1.Camera.getPicture({
            destinationType: ionic_native_1.Camera.DestinationType.DATA_URL,
            targetWidth: 1000,
            targetHeight: 1000,
            mediaType: ionic_native_1.Camera.MediaType.PICTURE
        }).then(function (imageData) {
            // imageData is a base64 encoded string
            _this.base64Image = "data:image/jpeg;base64," + imageData;
        }, function (err) {
            console.log(err);
        });
    };
    SettingsPage = __decorate([
        core_1.Component({
            templateUrl: 'build/pages/Settings/Settings.html'
        }), 
        __metadata('design:paramtypes', [ionic_angular_1.NavController])
    ], SettingsPage);
    return SettingsPage;
}());
exports.SettingsPage = SettingsPage;
