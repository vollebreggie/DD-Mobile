import { Component, Input } from '@angular/core';
import { NavController } from 'ionic-angular';
import { StreamViewModel } from '../../ViewModels/Stream.ViewModel';
import { Watch } from '../../Common/Watch';


@Component({
    selector: 'streamObject',
    directives: [Watch], 
    templateUrl: 'build/pages/Stream/Stream-Object.Component.html'
})

export class StreamObjectComponent {
    @Input() streamView:any;
    @Input() model:any;
   
}