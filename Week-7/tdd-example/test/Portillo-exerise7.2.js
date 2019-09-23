/*
============================================
; Title:  Exercise-7.4
; Author: Professor Krasso
; Date:   23 September 2019
; Modified By: Wendy Portillo
; Description:  Unit Testing
;===========================================
*/

const assert = require('assert');

describe('String#split', function(){
    it('should return an array of fruits', function() {
        assert(Array.isArray('Apple,Orange,Mango'.split(',')));
    });
});

function getFruits(str) {

    return str.split(',');

}

module.exports = getFruits;
