//Swicth/ Case 
//Switch é uma comparação com if

const data = new Date('1987-04-21 00:00:00');
let diaSemana = data.getDay();
let diaSemanaTexto;

switch (diaSemana) {//Checando a mesma variável 
case 0:
    diaSemanaTexto = 'Domingo';
    break; //Termina o código aqui
case 1:
diaSemanaTexto = 'Segunda';
    break;
case 2:
diaSemanaTexto = 'Terça';
    break;
case 3:
    diaSemanaTexto = 'Quarta'
    break;
case 4: 
    diaSemanaTexto = 'Quinta'
    break;
case 5:
    diaSemanaTexto = 'Sexta'
    break;
case 6:
    diaSemanaTexto = 'Sabado' 
    break;
}

console.log(diaSemana, diaSemanaTexto);

//Sempre que vc tiver uma variavel pra vc ficar checando, pode modificar para switch case.

/*if (diaSemana === 0) {
    diaSemanaTexto = 'Domingo';
} else if (diaSemana === 1) {
    diaSemanaTexto = 'Segunda';
} else if (diaSemana === 2) {
    diaSemanaTexto = 'Terça'
} else if (diaSemana === 3) {
    diaSemanaTexto = 'Quarta';
} else if (diaSemana === 4) {
    diaSemanaTexto = 'Quinta';   
}  else if (diaSemana === 5) {
    diaSemanaTexto = 'Sexta';
}  else if (diaSemana === 6) {
    diaSemanaTexto = 'Sabado';
}
 
console.log(diaSemana, diaSemanaTexto);*/    