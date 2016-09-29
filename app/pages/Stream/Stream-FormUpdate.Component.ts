import { StreamService } from '../../Services/Stream.Service';
import { ImageService } from '../../Services/Image.Service';
import { Component } from '@angular/core';
import { StreamViewModel } from '../../ViewModels/Stream.ViewModel';
import {NavController} from 'ionic-angular';
import { Validators, FormBuilder } from '@angular/forms';
import { Stream } from '../../Model/Stream.Model';
import { Watch } from '../../Common/Watch';
import {Camera} from 'ionic-native';

@Component({
    directives: [Watch],
    templateUrl: 'build/pages/Stream/Stream-FormUpdate.Component.html'
})

export class StreamFormUpdateComponent {
    //attributes
    streamViewModel: StreamViewModel;
    streams: Stream[];
    updateForm: any;
    image: any;
    source = "build/images/test.png";
    sourcebase64 = "build/images/test.png";
    public base64Image: string;


  

    //constructor
    constructor(public navCtrl: NavController, private formBuilder: FormBuilder, private streamService: StreamService, private imageService: ImageService) {
       // this.images = ["build/images/test.png", "build/images/profilepicture.jpg"];
        this.streams = [];
    }

    //form functionality
    ionViewLoaded() {
        this.updateForm = this.formBuilder.group({
            title: ['', Validators.required],
            description: [''],
        });
    }


    //images utilities
    takePicture() {
        Camera.getPicture({
            destinationType: Camera.DestinationType.DATA_URL,
            targetWidth: 1000,
            targetHeight: 1000
        }).then((imageData) => {
            // imageData is a base64 encoded string
            this.base64Image = "data:image/jpeg;base64," + imageData;
        }, (err) => {
            console.log(err);
        });
    }

    getPicture() {
        Camera.getPicture({
            destinationType: Camera.DestinationType.DATA_URL,
            targetWidth: 1000,
            targetHeight: 1000,
            mediaType: Camera.MediaType.PICTURE,
            sourceType: Camera.PictureSourceType.PHOTOLIBRARY
        }).then((imageData) => {
            // imageData is a base64 encoded string
            this.base64Image = "data:image/jpeg;base64," + imageData;
        }, (err) => {
            console.log(err);
        });
    }

    //CRUD new stream
    addStream() {

    }

    deleteStream() {

    }

    //upload/submit
    submitStream() {

    }


      //common functionallity
    getStream(counter: any) {
        return this.streams[counter];
    }

    createStream(title: string, content: string, image: string) {
        let stream = { 
            titel: title,
            content: content,
            picture: image
        }
        return stream;
        
    }

  
    addStreamToList(newStream: Stream) {
        this.streams.push(newStream);
    }

    //logging
    logForm() {
        console.log(this.updateForm.value)
    }
}