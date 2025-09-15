alert(' Boas vindas ao jogo de adiivinhação do número secreto')
let NumeroMax = 25
let NumeroSecreto = parseInt(Math.random() * NumeroMax + 1);
console.log(NumeroSecreto);
let chute;
let tentativas = 1;
//enquanto o chute n for igual ao nss n.s 
while (chute != NumeroSecreto){
    chute = prompt('Escolha um número entre 1 a 25');

//se o chute for igual ao número secreto:
if (chute == NumeroSecreto) {
     break;
}else{
    if (chute > NumeroSecreto){
        alert('O número secreto é maior que seu chute ;/');
    }else{
        alert('O número secreto é menor que seu chute ;/ ');
    }
     //tentativas = tentativas + 1;
     tentativas++;
    }
}
let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
alert(`Isso ai! Você descobriu o número secreto :D ${NumeroSecreto} com ${tentativas} ${palavraTentativa}.`);
alert(`OBS: Clique na tela se quiser que uma música toque!`)
//if (tentativas > 1) {
//    alert(`Isso ai! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} tentativas.`);
//} else {
    //alert(`Isso ai! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} tentativa.`);
//}
