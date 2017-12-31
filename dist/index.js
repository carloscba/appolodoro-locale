'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function (code, page) {
    var path = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : './locale';


    var localePath = path + '/' + code + '.json';

    try {
        var response = _fs2.default.readFileSync(localePath, 'utf8');
        var data = JSON.parse(response);
        return data[page];
    } catch (error) {
        new Error(error);
    }
};

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

;