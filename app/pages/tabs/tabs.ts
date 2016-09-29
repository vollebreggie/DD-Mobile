import {Component} from '@angular/core';
import {HomePage} from '../home/Home.Component';
import {CoursesPage} from '../Courses/Course.Component';
import {StreamPanelPage} from '../Stream/Stream-Panel.Component';
import {SettingsPage} from '../Settings/Settings.Component';
import {QuickTipsPage} from '../QuickTips/QuickTips.Component';

@Component({
  templateUrl: 'build/pages/tabs/tabs.html'
})
export class TabsPage {

  private HomeTab: any;
  private QuickTipsTab: any;
  private StreamTab: any;
  private CoursesTab: any;
  private SettingsTab: any;

  constructor() {
    // this tells the tabs component which Pages
    // should be each tab's root Page
    this.HomeTab = HomePage;
    this.QuickTipsTab = QuickTipsPage;
    this.StreamTab = StreamPanelPage;
    this.CoursesTab = CoursesPage;
    this.SettingsTab = SettingsPage;
  }
}
