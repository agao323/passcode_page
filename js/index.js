'use strict';

$('#joinButton').on('click', function(e) {
	e.preventDefault();
	$("#hi").toggle();
});

var limitInput = function(input) {
	if (input.value.length > input.maxLength) {
		input.value = input.value.slice(0, input.maxLength);
	}
}

var jump_to_2 = function(input) {
	var len = input.value.length;
	if (len > 0) {
		document.getElementById("second").focus();
	}
	else {
		document.getElementById("first").focus();
	}
}

var jump_to_3 = function(input) {
	var len = input.value.length;
	if (len > 0) {
		document.getElementById("third").focus();
	}
	else {
		document.getElementById("second").focus();
	}
}

var jump_to_4 = function(input) {
	var len = input.value.length;
	if (len > 0) {
		document.getElementById("fourth").focus();
	}
	else {
		document.getElementById("third").focus();
	}
}

var jump_to_button = function(input) {
	var len = input.value.length;
	if (len > 0) {
		document.getElementById("joinButton").focus();
	}
	else {
		document.getElementById("fourth").focus();
	}
}


