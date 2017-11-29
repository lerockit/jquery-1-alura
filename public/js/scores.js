
//Cria a linha de record do usuario recebendo os parâmetros (corpo da tabela, nome do usuario, tanto de palavras)
//A linha ja vem com evento de clique atrelado ao botão de remover

function createRecord(tbody, name, numPerMin) {

  var createRow = $('<tr>'),  
      createName = $('<td>').text(name),
      wordsPerMin = $('<span>').text(numPerMin),
      createNumWords = $('<td>').text(' Palavras/min')
      createRemove = $('<i>').attr('id', 'remove-button').addClass('fa').addClass('fa-trash'),
      createRemoveButton = $('<td>').prepend(createRemove);

  createNumWords.prepend(wordsPerMin);

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
      
};

//Mostra e esconde o painel de pontuações

function displayScores() {  

  $('.table-container').stop().slideToggle(500);

  scrollScores();

};

//Desce a pagina automaticamente para o fim do painel de pontuações

function scrollScores() {

  $('html, body').animate(
  {
    scrollTop: $('.table-container').offset().top+'px'
  }, 1000);

};

//Envia por post ao servidor todos os records que estão no painel de pontuações

function saveScores() {
  var scores = [],
      scoreLine = $('tbody tr');

  scoreLine.each(function() {

    var name = $(this).find('td:nth-child(1)').text(),
        wordsPerMin = $(this).find('td:nth-child(2) span').text();

    var scoreObject = {
      usuario: name,
      pontos: wordsPerMin
    };

    scores.push(scoreObject)
  });

  var data = {
    placar: scores
  };

  $.post("http://localhost:3000/placar", data, function() {

    console.log('It\'s working');

  });

};

//Solicita os dados do placara o servidor via get colocando-os na painel de pontuações

function loadRecords(){

  $.get("http://localhost:3000/placar", function(scores) {

    scores.forEach(function(score) {
    
      createRecord( $('tbody'), score.usuario, score.pontos);

    });

  });

};