
/*aqui estamos capturando os elementos botão e lâmpada
e colocando dentro da variavel const pode chamar a variavel
também de var se quiser
*/

const turnOn = document.getElementById('turnOn');
const turnOff = document.getElementById('turnOff');
const lamp = document.getElementById('lamp');

/*quando clicar no botão ligar altera a imagem
quando clicar no botão turnOn escute o clique aí troca a imagem
*/

function isLampBroken(){
   
    return lamp.src.indexOf('quebrada') >-1
}


function lampOn (){
    if ( !isLampBroken()){
    lamp.src='./img/ligada.jpg';
    }
}

function lampOff (){
    if ( !isLampBroken()){
    lamp.src='./img/desligada.jpg';
    }
}

    function lampBroken(){
        lamp.src='./img/quebrada.jpg';
    }


turnOn.addEventListener ( 'click', lampOn );
turnOff.addEventListener ( 'click', lampOff );
lamp.addEventListener ('mouseover', lampOn );
lamp.addEventListener ('mouseleave', lampOff );
lamp.addEventListener ('dblclick', lampBroken );



