'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function (code, page) {
    var path = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '../locale';


    var localePath = path + '/' + code + '.js';

    try {
        var response = require(localePath);
        var data = response.default;
        return data[page];
    } catch (error) {
        new Error('Appolodoro:' + error);
    }
};

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

;