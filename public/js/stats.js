
// Atualiza os status do usuário

function setValues(){

  var fieldText = field.val(),
      numWords = fieldText.split(/\S+/).length;

  words.text(numWords - 1);

  charac.text(fieldText.length);

  greenOrRed();

};

// Altera a cor de fundo do campo e a cor da letra de acordo com o texto digitado

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
