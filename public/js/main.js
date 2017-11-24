var textExample = $('#text'),
		field = $('#field'),
		startSeconds = $('#seconds').text(),
		seconds = $('#seconds'),
		words = $('#words'),
		charac = $('#charac')
    restartButton = $('#restart-button'),
    scoresButton = $('#scores-button'),
    randomButton = $('#random-button'),
    removeButton = $('#remove-button');

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

  scoresButton.on('click', function(){

    displayScores();

  });

  randomButton.on('click', function(){

    randomText();

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
  createRecord($('tbody'), 'Elliot', words.text());

};

function createRecord(tbody, name, numWords){

  var numPerMin = (numWords/(startSeconds/60)).toFixed(0);
      createRow = $('<tr>'),  
      createName = $('<td>').text(name),
      createNumWords = $('<td>').text(numPerMin + ' Palavras/min')
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


  $('.table-container').slideDown(500);
  scrollScores();
      
};

function scrollScores(){

  $('html, body').animate(
  {
    scrollTop: $('.table-container').offset().top+'px'
  }, 1000);

};

function displayScores(){  

  $('.table-container').stop().slideToggle(500);

  scrollScores();
};

function randomText(){
 
  $('.loading').slideDown(300);

  var error = document.querySelector('.error');
  $('.error-container').hide();

  if ( error != null) error.remove();

  var createError = $('<h3>').text('Ocorreu um erro, por favor tente mais tarde!').addClass('error');
  var createIconError = $('<i>').addClass('fa').addClass('fa-window-close');

  $.get("http://localhost:3000/frases", function(arrayText){

    var randomNumber = Math.floor(Math.random() * arrayText.length);

    textExample.text(arrayText[randomNumber].texto);    
    startSeconds = arrayText[randomNumber].tempo;
    seconds.text(arrayText[randomNumber].tempo);

  })
  .fail( function(){

    $('.error-wrapper .wrapper').append(createError);
    $('.error').prepend(createIconError);
    $('.error-container').slideDown(400);

  })
  .always(function(){

    $('.loading').slideUp();

  });

};