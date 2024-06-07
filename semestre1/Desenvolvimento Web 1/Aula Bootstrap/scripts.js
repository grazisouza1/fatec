//cria a variável inicialmente vazia
var dadosjSon = '';

//ao iniciar o documento, leia a função
$(document).ready(function() {
    /*getJSON -> função JQuery para ler arquivo json
     * no exemplo abaixo, mostro a captura de json local e remoto
     */

    $.getJSON("dados/alertcity.json", function (data) {
    //$.getJSON("https://info.dengue.mat.br/api/alertcity?geocode=3520509&disease=dengue&format=json&ew end=53&ey start=2024&ey end=2024", function (data) {

        //data.lenght -> captura do tamanho do array de objetos(json)
        for (linha = 0; linha < data.length; linha++) {
            dadosjSon += '<hr/>REGISTROS DA LINHA' + linha;
            dadosjSon += '<hr/>data_iniSE: ' + data[linha].data_iniSE;
            dadosjSon += '<br/>casos: ' + data[linha].casos_est;
            dadosjSon += '<br/>Nível: ' + data[linha].nivel;
        }

        //hashtag no jquery "conversa" com id html (apresenta os dados no index)
        $('#resultado').html(dadosjSon);

    });
}); 