//criar um array de vinhos com nome, tipo e quantidade em estoque
vinhos = ['Carmenere', 'Tinto', 10];

//criar um input para adicionar um novo vinho no array vinhos
var input = document.createElement('input');
input.setAttribute('type', 'text');
input.setAttribute('placeholder', 'Nome do vinho');
input.setAttribute('id', 'nome');
document.body.appendChild(input);

//adicionar o novo vinho no array vinhos
var botao = document.createElement('button');
botao.setAttribute('id', 'botao');
botao.innerHTML = 'Adicionar vinho';
document.body.appendChild(botao);
