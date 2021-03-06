/*
============================================
; Title:  employees.js
; Author: Wendy Portillo
; Date:   23 September 2019
; Description: File for the employee database model
;===========================================
*/

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let EmployeeSchema = new Schema({
    first: {type: String, required: true},
    last: {type:String, required: true},
    email: {type:String, required: true},
    ID: {type:String, required: true},

});

module.exports  = mongoose.model('Employees', EmployeeSchema);
