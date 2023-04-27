console.log('irina');
let hr = document.querySelector('#hr');
let mn = document.querySelector('#mn');
let sc = document.querySelector('#sc');

setInterval(() =>{
    let day = new Date();
let hh = day.getHours() * 30;
let mm = day.getMinutes() * 6;
let ss = day.getSeconds() * 6;

hr.style.transform = `rotateZ(${hh+(mm/12)}deg)`;
mn.style.transform = `rotateZ(${mm}deg)`;
sc.style.transform = `rotateZ(${ss}deg)`;

//reloj digital
let horas = document.getElementById('horas');
let minutos = document.getElementById('minutos');
let seconds = document.getElementById('seconds');
let ampm = document.getElementById('ampm');

let h = new Date().getHours();
let m = new Date().getMinutes();
let s = new Date().getSeconds();

horas.innerHTML = h;
minutos.innerHTML = m;
seconds.innerHTML = s;
})

