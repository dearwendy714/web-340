/*
============================================
; Title:  header.js
; Author: Wendy Portillo 
; Date:   11 August 2019
; Description: Displays a formatted header
;===========================================
*/

/**
* Params: firstName, lastName, assignment
* Response: output 
* Description: Returns a well-formatted string header
*/
exports.display = function (firstName, lastName, assignment) {
	let output = '\n' + firstName + ' ' + lastName + '\n' + assignment + '\ndate: '
	+ new Date().toLocaleDateString()

	return output
}