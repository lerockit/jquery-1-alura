
// Solicita ao servidor o arquivo "frases" que contém as frases e gera uma frase aleatória, dando
// mansagem erro caso não encontre o arquivo e colocando efeito de carregamento

function randomText(){

  $('.loading').slideDown(300);

  var error = document.querySelector('.error');
  $('.error-container').hide();

  if ( error != null) error.remove();

  var createError = $('<h3>').text('Ocorreu um erro, por favor tente mais tarde!').addClass('error');
  var createIconError = $('<i>').addClass('fa').addClass('fa-window-close');

  $.get("http://localhost:3000/frases", function(arrayText){

    console.log(arrayText);

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
