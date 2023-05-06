const horas = document.getElementById('horas')
const minutos = document.getElementById('minutos')
const segundos = document.getElementById('segundos')

const relogio = setInterval (function time(){
    let dateToday = new Date();
    let hr = dateToday.getHours();
    let min = dateToday.getMinutes();
    let seg = dateToday.getSeconds();

    if (hr < 10) hr = '0'+ hr;
    if (min < 10) min = '0'+ min;
    if (seg < 10) seg = '0'+ seg;

    horas.textContent = hr;
    minutos.textContent = min;
    segundos.textContent = seg;
})

let tela = document.querySelector('main')
let cor1 = document.querySelector('#var_1')
let cor2 = document.querySelector('#var_2')
let cor3 = document.querySelector('#var_3')
let cor4 = document.querySelector('#var_4')

function selectCor1(){
    tela.classList.add("cor_1")
    tela.classList.remove("cor_2")
    tela.classList.remove("cor_3")
    tela.classList.remove("cor_4")
}
function selectCor2(){
    tela.classList.add("cor_2")
    tela.classList.remove("cor_1")
    tela.classList.remove("cor_3")
    tela.classList.remove("cor_4")
}
function selectCor3(){
    tela.classList.add("cor_3")
    tela.classList.remove("cor_1")
    tela.classList.remove("cor_2")
    tela.classList.remove("cor_4")
}
function selectCor4(){
    tela.classList.add("cor_4")
    tela.classList.remove("cor_1")
    tela.classList.remove("cor_2")
    tela.classList.remove("cor_3")
}


cor1.addEventListener('click', selectCor1)
cor2.addEventListener('click', selectCor2)
cor3.addEventListener('click', selectCor3)
cor4.addEventListener('click', selectCor4)



let botao_menu_abrir = document.getElementById("botao_config")
let menu = document.getElementById('menu')
let botao_menu_fechar = document.getElementById("img")

function abriMenu(){
    menu.style.display = "flex"
}
function fecharMenu(){
    menu.style.display = "none"
}
botao_menu_abrir.addEventListener('click',abriMenu)
botao_menu_fechar.addEventListener('click',fecharMenu)


 