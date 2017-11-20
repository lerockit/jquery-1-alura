var text = $('#text'),
		field = $('#field'),
		startSeconds = $('#seconds').text(),
		seconds = $('#seconds'),
		words = $('#words'),
		charac = $('#charac'),
		restartButton = $('#restart-button');

$(document).ready(function(){

	setValues();
	startTimer();
	restartButton.on('click', function(){
		restart();
	});

});

function setValues(){

	field.on('input', function(){
	var fieldText = field.val(),
			numWords = fieldText.split(/\S+/).length;

	words.text(numWords - 1);

	charac.text(fieldText.length);

	});

};

function startTimer(){

	var secDeg = seconds.text();
	field.one('focus', function(){
	
	$('.seconds').addClass('start');

	var timer = setInterval(function(){
	
		secDeg--;

		seconds.text(secDeg);

		if(secDeg == 0){
			field.attr('disabled', true);
			clearInterval(timer);
		};

		} ,1000);

	});

};

function restart(){

	field.attr('disabled', false);
	field.val('');
	words.text('0');
	charac.text('0');
	seconds.text(startSeconds);
	startTimer();
	$('.seconds').removeClass('start');

};