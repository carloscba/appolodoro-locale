var assert = require('assert');
var appolodoroLocale = require('../dist').default

describe('Test Appolodoro-locale', function() {
    
    const copy = appolodoroLocale('es-ES','index','../locale')
    
    it('Testing contructor', function() {
        assert.equal(copy.title, 'Index')
    });  
    
});
