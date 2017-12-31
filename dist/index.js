'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function (code) {
    var path = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : './locale';


    var localePath = path + '/' + code + '.json';

    try {
        var data = _fs2.default.readFileSync(localePath, 'utf8');
        return JSON.parse(data);
    } catch (error) {
        new Error(error);
    }
};

var _axios = require('axios');

var _axios2 = _interopRequireDefault(_axios);

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

;