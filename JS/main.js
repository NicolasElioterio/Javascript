/*
var nome = 'Nicolas';
var n1 = 5;
var n2 = 3;
var frase = 'Japão é o melhor time do mundo'
//alert(nome + ' tem ' + idade + ' anos.');
//alert(idade+idade2);
console.log(nome)
console.log(n1*n2)
console.log(frase.toLowerCase())
//alert(frase.replace('Japão','Brasil')
*/

/*
var lista = ['Maçã','Pêra','Laranja'];
lista.push('Uva');
lista.pop();
console.log(lista[1]);
console.log(lista.toString()[1]);
console.log(lista.join(' - '));
*/

/*
var fruta = {nome:'maçã',cor:'vermelha'};
console.log(frutas.nome);
alert(frutas.cor);
*/

/*
var frutas = [{nome:'maçã',cor:'vermelha'}];
console.log(frutas);
alert(frutas[1]);
*/


/*
var idade = prompt('Qual a sua idade? ');

if(idade >= 18){
    alert('maior de idade')
}
else{
    alert('menor de idade')
}
*/

/*
var count = 0;
while (count <= 5){
    console.log(count)
    count++ ;
};
*/

/*
var count;
for (count = 0; count <= 5; count++){
    alert(count)
}
*/

/*
var d = new Date();
alert(d.getDay());
alert(d.getMonth());
alert(d.getFullYear());
*/

/*
function soma(n1, n2){
    return n1 + n2;
}


function validarIdade(idade){
    var validar;
    if (idade >= 18){
        validar = true;
    }
    else{
        validar = false;
    }
    return validar;
}

var idade = prompt('Qual sua idade ? ');
console.log(validarIdade(idade));

//alert(soma(10,5));
*/


function clicado(){
    document.getElementById('agradecimento').innerHTML = '<b>Obrigado por clicar.</b>';
    //console.log(document.getElementById('agradecimento'));
    //alert('Obrigado por clicar')
}

function redirecionar(){
    window.open('https://www.google.com');
    //window.location.href = 'https://www.google.com';
}

function trocar(elemento){
    //document.getElementById('mousemove').innerHTML = 'Obrigado por passar o mouse.';
    elemento.innerHTML = 'Obrigado por passar o mouse.';
}

function voltar(elemento){
    //document.getElementById('mousemove').innerHTML = 'Passe o mouse aqui.';
    elemento.innerHTML = 'Passe o mouse aqui.';
}

function load(){
    alert('Página Carregada');
}

function funcaoChange(elemento){
    console.log(elemento.value)
}