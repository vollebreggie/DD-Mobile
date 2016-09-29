import { User } from '../Model/User.Model';
import { Injectable } from '@angular/core';
import { Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';


@Injectable()
export class UserService {

    private userUrl = 'http://localhost:5000/api/users';
    private users: User[];

    constructor(private http: Http) { }

    getUser() {
        return this.http.get(this.userUrl)
            .map((responseData) => {
                return responseData.json();
            });
    }

    addUser(user) {
        console.log(user);
        var headers = new Headers({ 'Content-Type': 'application/json' });
        return this.http.post('api/users', JSON.stringify(user),
            { headers: headers })
            .map(response => { });
    }

    DeleteUser(user) {
        console.log(user);
        return this.http.delete(`api/users/${user.id}`)
            .map(response => { });
    }

    UpdateUser(user) {
        console.log(user);
        var headers = new Headers({ 'Content-Type': 'application/json' });
        return this.http.put('api/members', JSON.stringify(user),
            { headers: headers })
            .map(response => { });
    }



}