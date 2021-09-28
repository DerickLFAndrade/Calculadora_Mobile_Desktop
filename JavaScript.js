var pos1 = document.getElementById('pos1')
var pos2 = document.getElementById('pos2')
var pos3 = document.getElementById('pos3')
var contP = document.getElementById('containerPrincipal')
var BarraTema1 = document.getElementById("calcEsquerda")
var BarraTema2 = document.getElementsByClassName('corLetra')
var dell = document.getElementById("impsDell")
var pads = document.getElementById("pads")
var pads1 = document.getElementsByClassName('imps')
var inps = document.getElementsByClassName('imps')

function tema1() {
    for (let i = 0; i <= 4; i++) {
        BarraTema2[i].style.color = 'white'

    }
    for (i = 0; i <= 2; i++) {
        inps[i].style.background = 'hsl(0, 0%, 93%)'
        inps[i].style.color = 'hsl(60, 10%, 19%)'
    }

    for (i = 4; i <= 15; i++) {
        inps[i].style.color = 'hsl(60, 10%, 19%)'
        .color = 'hsl(52, 100%, 62%)'
        inps[i].style.background = 'hsl(0, 0%, 93%)'
        inps[3].style.background = 'hsl(225, 21%, 49%)'
        inps[16].style.background = 'hsl(225, 21%, 49%)'
        inps[17].style.background = 'hsl(6, 63%, 50%)'
        
        inps[17].style.color = 'white'
       
    }


    resultado.style.background = 'hsl(224, 36%, 15%)'
    resultado.style.color = 'white'

    pads.style.background = 'hsl(223, 31%, 20%)'
    contP.style.background = 'hsl(222, 26%, 31%)'
    pos1.style.background = 'hsl(6, 63%, 50%)'
    pos2.style.background = 'hsl(224, 36%, 15%'
    pos3.style.background = 'hsl(224, 36%, 15%'
}
function tema2() {
    for (let i = 0; i <= 4; i++) {
        BarraTema2[i].style.color = 'hsl(60, 10%, 19%)'

    }
    for (i = 0; i <= 2; i++) {
        inps[i].style.background = 'hsl(0, 0%, 93%)'
        inps[i].style.color = 'hsl(60, 10%, 19%)'
    }

    for (i = 4; i <= 15; i++) {
        inps[i].style.color = 'hsl(60, 10%, 19%)'
        
        inps[i].style.background = 'hsl(0, 0%, 93%)'
        inps[3].style.background = 'hsl(185, 42%, 37%)'
        inps[17].style.background = 'hsl(25, 98%, 40%)'
        inps[16].style.background = 'hsl(185, 42%, 37%)'
        
        inps[17].style.color = 'white'
       
    }

    resultado.style.background = 'white'
    resultado.style.color = 'black'

    pads.style.background = 'hsl(0, 5%, 81%)'
    contP.style.background = 'hsl(0, 0%, 90%)'
    pos1.style.background = 'hsl(224, 36%, 15%)'
    pos2.style.background = 'hsl(25, 98%, 50%)'
    pos3.style.background = 'hsl(224, 36%, 15%)'
}
function tema3() {

    contP.style.background = 'hsl(268, 75%, 9%)'

    for (let i = 0; i <= 4; i++) {
        BarraTema2[i].style.color = 'hsl(52, 100%, 62%)'

    }
    for (i = 0; i <= 2; i++) {
        inps[i].style.background = 'hsl(268, 71%, 12%)'
        inps[i].style.color = 'hsl(52, 100%, 62%)'
    }

    for (i = 4; i <= 15; i++) {
        inps[i].style.color = 'hsl(52, 100%, 62%)'
       
        inps[i].style.background = 'hsl(268, 71%, 12%)'
        inps[3].style.background = 'hsl(281, 89%, 26%)'
        inps[17].style.background = 'hsl(176, 100%, 44%)'
        inps[16].style.background = 'hsl(281, 89%, 26%)'
       
        inps[17].style.color = 'black'
    }



    resultado.style.background = 'hsl(268, 71%, 12%)'
    resultado.style.color = 'hsl(52, 100%, 62%)'
    pads.style.background = ' hsl(268, 71%, 12%)'
    pos1.style.background = 'hsl(224, 36%, 15%)'
    pos2.style.background = 'hsl(224, 36%, 15%)'
    pos3.style.background = 'hsl(176, 100%, 44%)'
}


pos1.addEventListener('click', tema1)
pos2.addEventListener('click', tema2)
pos3.addEventListener('click', tema3)
//mudar tema// 
var validar = 0
var validar2 = 1
var array = []
var array2 = []
var resultado = []
let n
let num1
let num2
resultado = document.getElementById("resultado")

function calcNum(num) { 
    resultado.innerHTML = resultado.innerHTML + num
}
function limpar() {
    var resultado = document.getElementById("resultado").innerHTML
   document.getElementById("resultado").innerHTML =  resultado.substring(0, resultado.length - 1)
   

}

function resetar() {
    resultado.innerHTML = ''

}




function calculou() {
    var resultado = document.getElementById ("resultado").innerHTML
 if (resultado) {     
    document.getElementById("resultado").innerHTML = eval(resultado)
 } else if (resultado == false){
     this.resultado.style.color = 'white'
     this.resultado.style.fontSize = '20pt'
     this.resultado.style.textAlign = 'center'
    this.resultado.innerHTML = 'Nada para calcular'
 }

}


