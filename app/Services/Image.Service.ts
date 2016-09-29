import { Injectable } from '@angular/core';
import {Camera} from 'ionic-native';

@Injectable()
export class ImageService {
//guess i know now

    getPictureFromCameraFront() {
        let options = {
            quality: 50,
            destinationType: 1,
            allowEdit: false,
            targetWidth: 800,
            targetHeight: 600,
            cameraDirection: 1,
            pictureSourceType: 1
        

        };
        Camera.getPicture(options).then((imageData) => {
            // imageData is either a base64 encoded string or a file URI
            // If it's base64:
            let base64Image = 'data:image/jpeg;base64,' + imageData;
            return base64Image;
        }, (err) => {
            // Handle error
        });

    }


    getPictureFromCameraBack() {
        let options = {
            quality: 50,
            destinationType: 1,
            allowEdit: false,
            targetWidth: 800,
            targetHeight: 600,
            cameraDirection: 0,
            pictureSourceType: 1

        };
        Camera.getPicture(options).then((imageData) => {
            // imageData is either a base64 encoded string or a file URI
            // If it's base64:
            let base64Image = 'data:image/jpeg;base64,' + imageData;
            return base64Image;
        }, (err) => {
            // Handle error
        });

    }


    getPictureFromLibrary() {
        let options = {
            quality: 50,
            destinationType: 1,
            allowEdit: false,
            targetWidth: 800,
            targetHeight: 600,
            pictureSourceType: 0,
            saveToPhotoAlbum: true

        };
        
        Camera.getPicture(options).then((imageData) => {
            // imageData is either a base64 encoded string or a file URI
            // If it's base64:
            let base64Image = 'data:image/jpeg;base64,' + imageData;
            console.log(base64Image);
        }, (err) => {
            // Handle error
        });

    }

    //@parameter direction
    //BACK -0- use the back facing camera
    //FRONT -1- use the front facing camer

    //@parameter pictureSourceType
    //PHOTOLIBRARY -0- Choose image from the device's photo library(same as SAVEDPHOTOALBUM for android)
    //CAMERA -1- Take a picture from the camera
    //SAVEDPHOTOALBUM -2-  Choose image ony from the device's camera roll album(same as PHOTOLIBRARY for android)

    //@parameter mediaType
    //PICTURE -0-  allow selection of still pictures only. As default it will return format specified via DestinationType
    //VIDEO -1- allow selection of vicdo only, ONLY RETURNS URL
    //ALLMEDIA -2- allow selection from all media types

    //@parameter destinationType
    //DATA_URL -0- return base64 encoded string. DATA_URL can be very memory intensive and cause app crashes or out of memory erros. Use FILE_URI OR NATIE_URI if possible
    //FILE_URI -1- Returns file uri
    //NATIVE_URI -2- Returns native uri

    getPicture(direction: any, pictureSourceType: any, mediaType: any, destinationType: any) {
        let options = {
            quality: 50,
            allowEdit: false,
            targetWidth: 800,
            targetHeight: 600,
            pictureSourceType: 0,
            saveToPhotoAlbum: true,
            //parameters
            DestinationType: destinationType,
            MediaType: mediaType,
            Direction: direction,
            PictureSourceType: pictureSourceType

        };
        Camera.PictureSourceType

        Camera.getPicture(options).then((imageData) => {
            // imageData is either a base64 encoded string or a file URI
            // If it's base64:
            let base64Image = 'data:image/jpeg;base64,' + imageData;
  
        }, (err) => {
            // Handle error
        });

    }
}