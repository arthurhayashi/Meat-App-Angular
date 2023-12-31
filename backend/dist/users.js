"use strict";
exports.__esModule = true;
var User = (function () {
    function User(email, name, password) {
        this.email = email;
        this.name = name;
        this.password = password;
    }
    User.prototype.matches = function (another) {
        return another !== undefined &&
            another.email == this.email &&
            another.password == this.password;
    };
    return User;
}());
exports.User = User;
exports.users = {
    "jul@gmail.com": new User('jul@gmail.com', 'juliana', 'j12'),
    "art@gmail.com": new User('art@gmail.com', 'arthur', '12345')
};
