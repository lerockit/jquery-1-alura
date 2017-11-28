
//Reseta todas informações e o cronometro

function restart(){

  isInitialized = false;
  clearInterval(timer);
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