var textExample = $('#text'),
		field = $('#field'),
		startSeconds = $('#seconds').text(),
		seconds = $('#seconds'),
		words = $('#words'),
		charac = $('#charac')
    restartButton = $('#restart-button'),
    scoresButton = $('#scores-button'),
    removeButton = $('#remove-button');

$(document).ready(function(){

  field.attr('placeholder', textExample.text());

  field.one('focus', function(){

    startTimer();

  });

	field.on('input', function(){

    setValues();
    var finalText = exampleText();
    
    $('.field-container').attr('text-exemple', finalText);
    if(field.val() == '') $('.field-container').attr('text-exemple', '');

  });

	restartButton.on('click', function(){

		restart();

	});

  scoresButton.on('click', function(){

    displayScores();

  });

});

function exampleText(){
  
  var fieldText = field.val(),
      textExampleContent = textExample.text(),
      finalText = textExampleContent.substr(fieldText.length, textExampleContent.length - fieldText.length);

      return finalText;

};

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

	field.one('focus', function(){
    startTimer();
  });

	$('.seconds').removeClass('start');
	$('.seconds').removeClass('game-over');
  $('.seconds-icon').removeClass('game-over');
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
  $('.seconds-icon').addClass('game-over');
  field.removeClass('red');
  field.removeClass('green');
  clearInterval(timer);
  $('.field-container').attr('text-exemple', '');
  createRecord($('tbody'), 'Elliot', words.text());

};

function createRecord(tbody, name, numWords){

  var createRow = $('<tr>'),  
      createName = $('<td>').text(name),
      createNumWords = $('<td>').text(numWords + ' Palavras')
      createRemove = $('<i>').attr('id', 'remove-button').addClass('fa').addClass('fa-trash'),
      createRemoveButton = $('<td>').prepend(createRemove);

  createRow.append(createName);
  createRow.append(createNumWords);    
  createRow.append(createRemoveButton);

  createRemove.on('click', function(){
    
    var newScoreLine = $(this).parent().parent();

    newScoreLine.fadeOut(500);

    setTimeout(function(){
      newScoreLine.remove();
    }, 500);

  });

  tbody.prepend(createRow);

  scrollScores();
      
};

function scrollScores(){

  $('.table-container').slideDown(500);
  $('html, body').animate(
  {
    scrollTop: $('.table-container').offset().top+'px'
  }, 1000);

};

function displayScores(){  

  $('.table-container').stop().slideToggle(500);

};
