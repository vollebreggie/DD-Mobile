import {Component, Input, NgZone} from '@angular/core';
import {Camera} from 'ionic-native';
import {ControlGroup}     from '@angular/common';


@Component({
    selector: 'df-question',
    templateUrl: 'build/components/dynamic-form-question/dynamic-form-question.component.html'
})
export class DynamicFormQuestionComponent {

  //  @Input() question: QuestionBase<any>;
    @Input() form: ControlGroup;
    @Input() idx: any;
    @Input() taskID: any;

    imageProcess: any;
    imageLink: any;
    imageId: any;
    ft: any;

    constructor(protected _zone: NgZone) {
        this.imageProcess = null;
        this.imageLink = null;
    }

  //  get isValid() { return this.form.controls[this.question.key].valid; }

    success(response) {
        this._zone.run(() => {
       //     this.form.controls[this.question.key].updateValue(parseInt(response.response));
        //    this.form.controls[this.question.key].markAsTouched();
            this.imageProcess = "Success";
            setTimeout(() => {
                this.imageProcess = null;
            }, 2000);
        });
    }

    failed(error) {
        this._zone.run(() => {
            this.imageLink = null;
            this.imageProcess = "Upload error, please try again";
            setTimeout(() => {
                this.imageProcess = null;
            }, 2000);
        });

    }

    // Upload an image to the server and add the campaign and question ID.
    // This will allow background processing of the image
    uploadImage(key) {

        let options = {
            quality: 50,
            destinationType: 1,
            allowEdit: false,
            targetWidth: 800,
            targetHeight: 600
        };

        Camera.getPicture(options).then((imageData) => {

            this.imageLink = imageData;

            this.imageProcess = "Uploading";

            // Upload the file
    //        this.ft = new FileTransfer();
     //       var filename = "q" + this.question.key + ".jpg";
    //        var options = new FileUploadOptions();

            //options.fileKey = "file";
            //options.fileName = filename;
            //options.mimeType = "image/jpeg";
            //options.chunkedMode = false;
            //options.headers = {
            //    'Content-Type': undefined,
            //    'Authorization': 'Bearer ' + localStorage.getItem('id_token') // this should send through the JWT
            //};
            //options.params = {
            //    questionId: this.question.key,
            //    taskId: this.taskID,
            //    fileName: filename
            //};

            this.ft.upload(imageData, "http://app.com/api/v1/image/save", this.success.bind(this), this.failed.bind(this), options);

        }, (err) => {
            this.imageProcess = "Camera Error";
            setTimeout(() => {
                this.imageProcess = null;
            }, 2000);
        });
    }

}