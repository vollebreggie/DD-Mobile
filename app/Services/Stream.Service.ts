import { StreamViewModel } from '../ViewModels/Stream.ViewModel';
import { Injectable } from '@angular/core';
import { Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';


@Injectable()
export class StreamService {

    private streamUrl = 'http://localhost:3116/api/streams';
    private streams: StreamViewModel[];

    constructor(private http: Http) { }

    getStreams() {
        return this.http.get(this.streamUrl)
            .map((responseData) => {
                return responseData.json();
            });
    }

    addStream(stream) {
        console.log(stream);
        var headers = new Headers({ 'Content-Type': 'application/json' });
        return this.http.post('api/streams', JSON.stringify(stream),
            { headers: headers })
            .map(response => { });
    }

    DeleteStream(stream) {
        console.log(stream);
        return this.http.delete(`api/streams/${stream.id}`)
            .map(response => { });
    }

    UpdateStream(stream) {
        console.log(stream);
        var headers = new Headers({ 'Content-Type': 'application/json' });
        return this.http.put('api/streams', JSON.stringify(stream),
            { headers: headers })
            .map(response => { });
    }



}