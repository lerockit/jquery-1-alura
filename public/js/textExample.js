
// Solicita ao servidor o arquivo "frases" que contém as frases e gera uma frase aleatória, dando 
// mansagem erro caso não encontre o arquivo e colocando efeito de carregamento

function randomText() {
 
  $('.loading').slideDown(300);

  var error = document.querySelector('.error');
  $('.error-container').hide();

  if ( error != null) error.remove();

  var createError = $('<h3>').text('Ocorreu um erro, por favor tente mais tarde!').addClass('error'),
      createIconError = $('<i>').addClass('fa').addClass('fa-window-close');

  $.get("http://localhost:3000/frases", function(arrayText){

    var randomNumber = Math.floor(Math.random() * arrayText.length);

    textExample.text(arrayText[randomNumber].texto);    
    startSeconds = arrayText[randomNumber].tempo;
    seconds.text(arrayText[randomNumber].tempo);
    field.attr('placeholder', 'ID do texto acima: ' + arrayText[randomNumber]._id);

    if(!haveEvent) restart();
    field.val('');

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

// Solicita ao arquivo "frases" dentro do servidor uma frase com o id digitado pelo usuario, dando 
// mansagem erro caso não encontre o arquivo e colocando efeito de carregamento

function findText() {

  $('.loading').slideDown(300);

  var error = document.querySelector('.error');
  $('.error-container').hide();

  if ( error != null) error.remove();

  var createError = $('<h3>').text('Por favor digite um ID válido').addClass('error'),
      createIconError = $('<i>').addClass('fa').addClass('fa-window-close'),
      findFieldVal = $('#find-field').val(),
      textId = { id: findFieldVal };

  $.get("http://localhost:3000/frases", textId, function(newText){

    textExample.text(newText.texto);    
    startSeconds = newText.tempo;
    seconds.text(newText.tempo);

    if(!haveEvent) restart();
    field.val('');

    field.attr('placeholder', 'ID do texto acima: ' + newText._id);

  })
  .fail( function(){

    $('.error-wrapper .wrapper').append(createError);
    $('.error').prepend(createIconError);
    $('.error-container').slideDown(400);

  })
  .always(function(){

    $('.loading').slideUp();

  });

  $('#find-field').val('');

}