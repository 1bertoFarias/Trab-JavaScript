/*
Trabalho da discplina de programação em JavaScript
turma:963N
aluno:Humberto Oliveira Farias 
matricula:2024100646
*/
function verificadordeprimo (numero){
    if(numero<2){
        return false;
    }
    for(let i=numero-1; i>=2; i--){
        let resto = numero%i;
        if(resto==0){
            return false;
        }
    }
    return true
}
function dezprimos (numero){
    if(verificadordeprimo(numero) == true){
    let primos = [];
  while (primos.length < 11) {
        if (verificadordeprimo(numero)) {
            primos.push(numero);
        }
        numero++;}
        alert(`Os 10 números primos subsequentes ao seu número são:`);
        alert(primos.slice(1,11));
    }else{
        alert('O número escolhido não é primo')
    }
}
let numero = parseInt(prompt('digite um número'));
dezprimos(numero);
