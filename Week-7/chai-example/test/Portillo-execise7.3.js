/*
============================================
; Title:  Exercise-7.3
; Author: Professor Krasso
; Date:   23 September 2019
; Modified By: Wendy Portillo
; Description:  Unit Testing
;===========================================
*/

var fruits = require('../fruits');
var chai = require('chai');
var assert = chai.assert;

describe('fruits', function( ) {
    it('should return an array of fruits', function(){
        var f = fruits('Apple,Orange,Mango');
        assert(Array.isArray(f));
    });
});
