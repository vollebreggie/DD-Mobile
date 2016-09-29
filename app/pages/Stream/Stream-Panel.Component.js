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
var Stream_List_Component_1 = require('../Stream/Stream-List.Component');
var Stream_FormUpdate_Component_1 = require('../Stream/Stream-FormUpdate.Component');
var StreamPanelPage = (function () {
    function StreamPanelPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    StreamPanelPage.prototype.goToOtherPage = function () {
        this.navCtrl.push(Stream_FormUpdate_Component_1.StreamFormUpdateComponent);
    };
    StreamPanelPage = __decorate([
        core_1.Component({
            selector: 'StreamPanel',
            directives: [Stream_List_Component_1.StreamListComponent],
            templateUrl: 'build/pages/Stream/Stream-Panel.Component.html'
        }), 
        __metadata('design:paramtypes', [ionic_angular_1.NavController])
    ], StreamPanelPage);
    return StreamPanelPage;
}());
exports.StreamPanelPage = StreamPanelPage;
