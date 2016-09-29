

import { StreamService } from '../../Services/Stream.Service';
import { Component, Input } from '@angular/core';
import { NavController } from 'ionic-angular';
import { StreamViewModel } from '../../ViewModels/Stream.ViewModel';
import { StreamObjectComponent } from '../Stream/Stream-Object.Component';
import { Watch } from '../../Common/Watch';



@Component({
    selector: 'streamList',
    directives: [StreamObjectComponent, Watch], 
    templateUrl: 'build/pages/Stream/Stream-List.Component.html'
})

export class StreamListComponent {
     
     StreamViewList: any;
     testModel = ["henk", "klaas"];

     constructor(private navCtrl: NavController, private streamService: StreamService) {
        
     }

     ngOnInit() {
        this.subscribeStreams();
        
    }

    subscribeStreams() {
        this.streamService.getStreams()
            .subscribe(res => this.StreamViewList = res);
    }
}