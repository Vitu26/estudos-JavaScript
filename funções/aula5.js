//função com retorno condicional
 function maiorDeIdade() {
    if(idade >= 18){
        return true;
    }else{
        return false;
    }
 }
 
 let idade = 65;
 let verificacao = maiorDeIdade(idade);
 
 if(verificacao) {
    console.log('É maior de idade');
 }else{
    console.log('Menor de idade');
 }