var textExample = $('#text'),
		field = $('#field'),
		startSeconds = $('#seconds').text(),
		seconds = $('#seconds'),
		words = $('#words'),
		charac = $('#charac');

$(document).ready(function(){

	setValues();
	startTimer();
	$('#restart-button').on('click', function(){
		restart();
	});

});

function setValues(){

	field.on('input', function(){
		var fieldText = field.val(),
				numWords = fieldText.split(/\S+/).length;

		words.text(numWords - 1);

		charac.text(fieldText.length);

		greenOrRed();

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
			$('.seconds').addClass('game-over');
      field.removeClass('red');
      field.removeClass('green');
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
	$('.seconds').removeClass('game-over');
  field.removeClass('red');
  field.removeClass('green');

};

function greenOrRed(){

  var textValidate = textExample.text().substr(0,field.val().length);

  if( textValidate == field.val() ){
    field.addClass('green');
    field.removeClass('red');
  } 

  else{
    field.addClass('red');
    field.removeClass('green');
  }

};