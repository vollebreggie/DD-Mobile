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
var core_1 = require('@angular/core');
var ionic_angular_1 = require('ionic-angular');
var Stream_Object_Component_1 = require('../Stream/Stream-Object.Component');
var Watch_1 = require('../../Common/Watch');
var StreamListComponent = (function () {
    function StreamListComponent(navCtrl, streamService) {
        this.navCtrl = navCtrl;
        this.streamService = streamService;
        this.testModel = ["henk", "klaas"];
    }
    StreamListComponent.prototype.ngOnInit = function () {
        this.subscribeStreams();
    };
    StreamListComponent.prototype.subscribeStreams = function () {
        var _this = this;
        this.streamService.getStreams()
            .subscribe(function (res) { return _this.StreamViewList = res; });
    };
    StreamListComponent = __decorate([
        core_1.Component({
            selector: 'streamList',
            directives: [Stream_Object_Component_1.StreamObjectComponent, Watch_1.Watch],
            templateUrl: 'build/pages/Stream/Stream-List.Component.html'
        }), 
        __metadata('design:paramtypes', [ionic_angular_1.NavController, Stream_Service_1.StreamService])
    ], StreamListComponent);
    return StreamListComponent;
}());
exports.StreamListComponent = StreamListComponent;
