
//Cria a linha de record do usuario recebendo os parâmetros (corpo da tabela, nome do usuario, tanto de palavras)
//A linha ja vem com evento de clique atrelado ao botão de remover

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

//Mostra e esconde o painel de pontuações

function displayScores(){  

  $('.table-container').stop().slideToggle(500);

  scrollScores();
};

//Desce a pagina automaticamente para o fim do painel de pontuações

function scrollScores(){

  $('html, body').animate(
  {
    scrollTop: $('.table-container').offset().top+'px'
  }, 1000);

};
