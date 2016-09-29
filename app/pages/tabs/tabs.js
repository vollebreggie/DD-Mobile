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
var Home_Component_1 = require('../home/Home.Component');
var Course_Component_1 = require('../Courses/Course.Component');
var Stream_Panel_Component_1 = require('../Stream/Stream-Panel.Component');
var Settings_Component_1 = require('../Settings/Settings.Component');
var QuickTips_Component_1 = require('../QuickTips/QuickTips.Component');
var TabsPage = (function () {
    function TabsPage() {
        // this tells the tabs component which Pages
        // should be each tab's root Page
        this.HomeTab = Home_Component_1.HomePage;
        this.QuickTipsTab = QuickTips_Component_1.QuickTipsPage;
        this.StreamTab = Stream_Panel_Component_1.StreamPanelPage;
        this.CoursesTab = Course_Component_1.CoursesPage;
        this.SettingsTab = Settings_Component_1.SettingsPage;
    }
    TabsPage = __decorate([
        core_1.Component({
            templateUrl: 'build/pages/tabs/tabs.html'
        }), 
        __metadata('design:paramtypes', [])
    ], TabsPage);
    return TabsPage;
}());
exports.TabsPage = TabsPage;
