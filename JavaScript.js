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
        inps[18].style.color = 'hsl(52, 100%, 62%)'
        inps[i].style.background = 'hsl(0, 0%, 93%)'
        inps[3].style.background = 'hsl(225, 21%, 49%)'
        inps[16].style.background = 'hsl(225, 21%, 49%)'
        inps[17].style.background = 'hsl(6, 63%, 50%)'
        inps[18].style.background = 'hsl(0, 0%, 93%)'
        inps[17].style.color = 'white'
        inps[18].style.color = 'hsl(60, 10%, 19%)'
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
        inps[18].style.color = 'hsl(52, 100%, 62%)'
        inps[i].style.background = 'hsl(0, 0%, 93%)'
        inps[3].style.background = 'hsl(185, 42%, 37%)'
        inps[17].style.background = 'hsl(25, 98%, 40%)'
        inps[16].style.background = 'hsl(185, 42%, 37%)'
        inps[18].style.background = 'hsl(0, 0%, 93%)'
        inps[17].style.color = 'white'
        inps[18].style.color = 'hsl(60, 10%, 19%)'
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
        inps[18].style.color = 'hsl(52, 100%, 62%)'
        inps[i].style.background = 'hsl(268, 71%, 12%)'
        inps[3].style.background = 'hsl(281, 89%, 26%)'
        inps[17].style.background = 'hsl(176, 100%, 44%)'
        inps[16].style.background = 'hsl(281, 89%, 26%)'
        inps[18].style.background = 'hsl(268, 71%, 12%)'
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
    if (typeof resultado == 'undefinied' || resultado.value == '+') {
        resultado.value = ''
    }
    resultado.value = resultado.value + num
    
   
}
function limpar() {
    resultado.value.split()
    array2 = resultado.value.substring(0, resultado.value.length - 1)
    resultado.value = array2
   
}

function resetar() {
    resultado.value = ''
    res = ''
    num1 = 0
    num2 = 0
    validar = 0
    validar2 = 1
    
}



function pegarValores() {
   
    if (validar == 0) {
       n = Number(resultado.value)
       num1 = n
       validar = 1
        console.log(`numero 1 ${num1}`)
        validar2 == 1
        
    }
    resultado.value = '+'
    

}
function somou() {
     if (validar2 == 1) {
        n = Number(resultado.value)
        num2 = n
        console.log(`numero 2 ${num2}`)
        validar2 = 0
    }
    let res = num1 + num2
    resultado.value = String(res)
  }