var frase = $('.frase').text();

var numPalavras = frase.split(" ").length;

$('#tamanho-frase').text(numPalavras);


var campo = $('.campo-digitacao');

campo.on('input', function() {
    var conteudo = campo.val();
    var qtdPalvras = conteudo.split(' ').length;
    $('#contador-palavras').text(qtdPalvras);
    var qtdCaracters = conteudo.length;
    $('#contador-caracteres').text(qtdCaracters);
});

var tempoRestante = $('#tempo-digitacao').text();
campo.one("focus", function() {
  var cronometroID = setInterval(function(){
    tempoRestante--;
    $('#tempo-digitacao').text(tempoRestante);
    if(tempoRestante < 1){
      campo.attr("disabled", true);
      clearInterval(cronometroID);
    }
  }, 1000);
});


var campo = $(".campo-digitacao");
