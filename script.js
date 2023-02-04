const horas = document.getElementById('horas')
const minutos = document.getElementById('minutos')
const segundos = document.getElementById('segundos')

const  relogio = setInterval(function tempo(){
    let  dateToday = new Date();
    let hrs = dateToday.getHours();
    let min = dateToday.getMinutes();
    let s = dateToday.getSeconds();

    horas.textContent = hrs;
    minutos.textContent = min;
    segundos.textContent = s;

})