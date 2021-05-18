var nota = 39;
var res;

// Aprovado - nota >= 60
// Recuperação - >= 40 < 60

if (nota >= 60){
    res = 'Aprovado';
}
else if (nota >= 40){
    console.log('Recuperação');
}
else{
    res = 'Reprovado';
}
console.log(res);