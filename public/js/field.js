
//Inicializa o cronômetro quando usuário dá foco ao campo de texto

function startTimer(){

  var secDeg = seconds.text();

  field.off('focus', startTimer);

  isInitialized = true;

  $('.seconds').addClass('start');

  timer = setInterval(function(){

    secDeg--;
    seconds.text(secDeg);

    if(secDeg == 0){
      gameOver();
    };

  } ,1000);

};

//Atualiza as informações quando o tempo no cronômetro chega a 0

function gameOver(){

  field.attr('disabled', true);
  $('.seconds-icon').addClass('game-over');
  field.removeClass('red');
  field.removeClass('green');
  clearInterval(timer);
  createRecord($('tbody'), 'Elliot', words.text());

};
