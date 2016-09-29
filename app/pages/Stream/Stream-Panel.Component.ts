import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { StreamViewModel } from '../../ViewModels/Stream.ViewModel';
import { StreamListComponent } from '../Stream/Stream-List.Component';
import { StreamFormUpdateComponent } from '../Stream/Stream-FormUpdate.Component';

@Component({
    selector: 'StreamPanel',
   // directives: [StreamListComponent],
    templateUrl: 'build/pages/Stream/Stream-Panel.Component.html'
})

export class StreamPanelPage {
    

    constructor(public navCtrl: NavController) {

    }

    goToOtherPage() {
        this.navCtrl.push(StreamFormUpdateComponent);
    }


}