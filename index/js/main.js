var text = $('#text').text(),
		field = $('#field'),
		startSeconds = $('#seconds').text(),
		seconds = $('#seconds'),
		words = $('#words'),
		charac = $('#charac');

$(document).ready(function(){

	setValues();
	startTimer();

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

	field.one('focus', function(){
	
	$('.seconds').addClass('start');

	var timer = setInterval(function(){
		
		var secDeg = seconds.text();
		secDeg--;

		seconds.text(secDeg);

		if(secDeg == 0){
			field.attr('disabled', true);
			clearInterval(timer);
		};

	} ,1000);

	});

}
