//declarando funções
//função com parametros
function somar(n1 , n2) {
    //n1 e n2 são os parametros da função e só existem dentro da função
    let resultado = n1 + n2;
    console.log('Resultado: ' + resultado);
}

somar(3, 5);

function nomeCompleto(nome, sobrenome) {
    console.log(`${nome} ${sobrenome}`);
}

nomeCompleto("Victor", "Lemos");
nomeCompleto("Brogo", "Filho de Vitin");