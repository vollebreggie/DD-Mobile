import {IONIC_DIRECTIVES} from "ionic-angular";
import {Component, ElementRef, Input, Inject, ViewChild, Renderer, Directive} from "@angular/core";
//import { FileChooser } from 'ionic-native';
import { NativeStorage } from 'ionic-native';
import { File } from 'ionic-native';
import { ImagePicker } from 'ionic-native';
import{ Transfer } from 'ionic-native';
import {Camera} from 'ionic-native';

@Component({
    selector: "upload-button",
    template: 'build/pages/Stream/Image.Component.html'
})


export class UploadButton {

    private options: Object = {
        maximumImagesCount: 10,
        width: 800,
        height: 800,
        quality: 80
    }

    getImager() {
        ImagePicker.getPictures(this.options).then((results) => {
            for (var i = 0; i < results.length; i++) {
                console.log('Image URI: ' + results[i]);
            }
        }, (err) => { });

    }





}