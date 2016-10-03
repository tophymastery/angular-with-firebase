'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var add = function add(x, y) {
    var result = x + y;
    return result;
};

// ================

var obj = {
    a: 10,
    b: 20,
    sum: function sum() {
        return this.a + this.b;
    }
};

function Person(name) {
    this.name = name;
    this.talk = function () {
        console.log('Hi in, ' + this.name);
    };
}

console.log(add(3, 5));
console.log(obj.sum());

Person.prototype.talk = function () {
    console.log('Hi, ' + this.name);
};

var tophy = new Person('tophy');
tophy.talk();

// ================

console.log(' ===== ');

var Animal = function () {
    function Animal(name) {
        _classCallCheck(this, Animal);

        this.name = name;
    }

    _createClass(Animal, [{
        key: 'talk',
        value: function talk() {
            console.log('...');
        }
    }, {
        key: 'hi',
        value: function hi() {
            console.log('H, ' + this.name);
        }
    }]);

    return Animal;
}();

var Cat = function (_Animal) {
    _inherits(Cat, _Animal);

    function Cat(name, age) {
        _classCallCheck(this, Cat);

        var _this = _possibleConstructorReturn(this, (Cat.__proto__ || Object.getPrototypeOf(Cat)).call(this, name));

        _this.age = age;
        return _this;
    }

    _createClass(Cat, [{
        key: 'talk',
        value: function talk() {
            console.log(' Cat ' + this.age);
        }
    }]);

    return Cat;
}(Animal);

var ani = new Animal('animal');
var cat = new Cat('animal', 3);

console.log(ani.talk());
console.log(cat.talk());

// =============
console.log(' ===== ');

var obj2 = {
    name: 'tophy',
    score: 5,
    rating: 3
};

var name2 = obj2.name2;
var score2 = obj2.score2;


var name = obj2.name;
var score = obj2.score;

console.log(name + ' ' + score);
console.log(name2 + ' ' + score2);

var messages = ['1', '2', '3', '4'];

var first = messages[0];
var last = messages.slice(1);

console.log(first);
console.log(last);

// =============
console.log(' ===== ');
var obj3 = {
    name: 'a',
    email: 'tophy@gmail.com'
};

console.log(obj3);

var newObj = obj3;
newObj.id = 10;

console.log(obj3);
console.log(newObj);

var newObj2 = _extends({}, obj3, {
    id: 10
});

console.log("newObj2");
console.log(newObj2);

// =============
console.log(' ===== ');

