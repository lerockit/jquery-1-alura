
//Declaração de todas variáveis principais

var textExample = $('#text'),
		field = $('#field'),
		startSeconds = $('#seconds').text(),
		seconds = $('#seconds'),
		words = $('#words'),
		charac = $('#charac'),
    timer = null,
    haveEvent = true,
    saveButton = $('#save-button'),
    restartButton = $('#restart-button'),
    scoresButton = $('#scores-button'),
    randomButton = $('#random-button'),
    removeButton = $('#remove-button'),
    findButton = $('#find-button'),
    findConfirmButton = $('#find-confirm-button');

//Funções a serem executadas após a pagina carregar    

$(document).ready(function(){

  loadRecords();

  field.one('focus', function() {

    startTimer();
    haveEvent = false;

  });

	field.on('input', function() {

    setValues();
        
  });

  saveButton.on('click', function() {

    saveScores();

  });

	restartButton.on('click', function() {

    if(!haveEvent) restart();

	});

  scoresButton.on('click', function() {

    displayScores();

  });

  randomButton.on('click', function() {

    randomText();

  });

  findButton.on('click', function() {

    $('.find-field-wrapper').toggle('slide');

  });

  findConfirmButton.on('click', function() {

    findText();

  });

});
