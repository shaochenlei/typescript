var getPersonName = function (person) {
    console.log(person.name);
};
var setPersonName = function (person, name) {
    person.name = name;
};
var person = {
    name: 'dell',
    sex: 'male',
    say: function () {
        return 'say hello';
    },
    teach: function () {
        return 'teach';
    }
};
getPersonName(person);
getPersonName(person);
setPersonName(person, 'lee');
//类想用接口
var User = /** @class */ (function () {
    function User() {
        this.name = 'dell';
    }
    User.prototype.say = function () {
        return 'hello';
    };
    return User;
}());
// SayHi约束
var say = function (word) {
    return word;
};
