import { Component, OnChanges, Input, SimpleChange } from '@angular/core';


@Component({
    selector: 'watch',
    templateUrl: 'build/Common/Watch.html'
})

export class Watch implements OnChanges {
    @Input() watchProperty: any;

    ngOnChanges(changes: { [propName: string]: SimpleChange }) {
        console.log('onChanges - watchProperty = ' + changes['watchProperty'].currentValue);

    }
}
