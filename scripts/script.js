const seg = document.querySelector(".segundo");
const min = document.querySelector(".minuto");
const hora = document.querySelector(".hora");

setInterval(function(){
  let tempo = new Date();
  let segundos = tempo.getSeconds()*6;
  let minutos = tempo.getMinutes()*6;
  let horas = tempo.getHours()*30;
  seg.style.transform = `rotateZ(${segundos}deg)`;
  min.style.transform = `rotateZ(${minutos}deg)`;
  hora.style.transform = `rotateZ(${horas+(minutos/12)}deg)`;
})