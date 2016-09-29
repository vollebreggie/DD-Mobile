"use strict";
var User = (function () {
    function User(user_id, emai, password, name, active, address, picture, phonenumber, gender) {
        this.user_id = user_id;
        this.emai = emai;
        this.password = password;
        this.name = name;
        this.active = active;
        this.address = address;
        this.picture = picture;
        this.phonenumber = phonenumber;
        this.gender = gender;
    }
    return User;
}());
exports.User = User;
