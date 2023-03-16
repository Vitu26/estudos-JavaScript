var p = document.getElementsByTagName('p');

p.innerHTML = 'Manipulado com sucesso';

console.log(p.innerHTML);

for(var i = 0; i < p.length; i++){
    p[i].innerHTML = 'Manipulado com JS - ' + i;
}