var textExample = $('#text'),
		field = $('#field'),
		startSeconds = $('#seconds').text(),
		seconds = $('#seconds'),
		words = $('#words'),
		charac = $('#charac')
    restartButton = $('#restart-button');

$(document).ready(function(){

  field.one('focus', function(){
    startTimer();
  });

	field.on('input', function(){
    setValues();
  });

	restartButton.on('click', function(){
		restart();
	});


});

function setValues(){

	var fieldText = field.val(),
			numWords = fieldText.split(/\S+/).length;

	words.text(numWords - 1);

	charac.text(fieldText.length);

	greenOrRed();

};

function startTimer(){

	var secDeg = seconds.text();
	
	$('.seconds').addClass('start');

	var timer = setInterval(function(){

  	secDeg--;
  	seconds.text(secDeg);

  	if(secDeg == 0){
  		gameOver(timer);
  	};

	} ,1000);


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

function gameOver(timer){

  field.attr('disabled', true);
  $('.seconds').addClass('game-over');
  field.removeClass('red');
  field.removeClass('green');
  clearInterval(timer);
  addRecord();

};

function addRecord(){

  var numWords = words.text(),
      name = 'Elliot';

  $('tbody').prepend('<tr><td>' + name + '</td><td>' + numWords + ' Palavras </td></tr>');

};
