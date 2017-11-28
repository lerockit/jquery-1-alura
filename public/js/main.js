
//Declaração de todas variáveis principais

var textExample = $('#text'),
		field = $('#field'),
		startSeconds = $('#seconds').text(),
		seconds = $('#seconds'),
		words = $('#words'),
		charac = $('#charac')
    restartButton = $('#restart-button'),
    scoresButton = $('#scores-button'),
    randomButton = $('#random-button'),
    removeButton = $('#remove-button'),
    isInitialized = false,
    timer = null;

//Funções a serem executadas após a pagina carregar    

$(document).ready(function(){

  field.one('focus', function(){

    startTimer();

  });

	field.on('input', function(){

    setValues();
        
  });

	restartButton.on('click', function(){

    if(isInitialized) restart();

	});

  scoresButton.on('click', function(){

    displayScores();

  });

  randomButton.on('click', function(){

    randomText();

  });

});
