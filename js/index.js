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
