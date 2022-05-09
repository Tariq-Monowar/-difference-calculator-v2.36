const digitalclock = ()=>{

  let dete = new Date();
  let hours = dete.getHours();
  let minutes = dete.getMinutes();
  let second = dete.getSeconds();
  let timeeFormet = 'AM';

  if(hours == 0){
      hours = 12;
  }
  if(hours > 12){
      hours = hours - 12;
      timeeFormet = 'PM';
  }

  hours = hours < 10 ? '0' + hours : hours;
  minutes = minutes < 10 ? '0' + minutes : minutes;
  second = second < 10 ? '0' + second : second;

  let finalTime = `${hours}:${minutes}:${second}`
  const for_finalTime = document.getElementById('time');
  const for_small = document.querySelector('small');

  for_finalTime.innerText = finalTime;
  for_small.innerText = timeeFormet;

  setInterval(digitalclock,1000)
}
digitalclock()

var typed = new Typed('.animation', {
  strings: [
    "Distance",
    "number system",
    "Temperature",
    "Time converter",
    "Weight"
  ],
  typeSpeed: 65,
  backSpeed: 75,
  loop: true
});


const search = document.querySelector(".input-area")
search.addEventListener("keyup",(e)=>{
var value = e.target.value.toLowerCase();

if(e.keyCode == 13){
    if(value == 'temperature' || value == 'heat' || value == 'temperatur' || value == 'celsius' || value == 'temperatu' || value == 'temperat' || value == 'tempera'|| value == 'temperatur' ){
      window.open("public/Temperature.html")
    }

    if(value == 'binary' || value == 'decimal' || value == 'octal' || value == 'hexa hecimal' || value == 'bin' || value == 'number system' || value == 'hexa'|| value == 'number' ){
      window.open("public/numbering system.html")
    }

    if(value == 'time' || value == 'times' || value == 'year' || value == 'month' || value == 'week' || value == 'hour' || value == 'hexa'|| value == 'minute' || value == 'second'){
      window.open("public/Time.html")
    }

    if(value == 'weighte' || value == 'kilogram"' || value == 'gram' || value == 'milligram' || value == 'pound' || value == 'mg' || value == 'g'|| value == 'kg' || value == 'pound'){
      window.open("public/Weight.html")
    }

    if(value == 'distance' || value == 'metert' || value == 'kilometer' || value == 'decimeter' || value == 'millimeter' || value == 'Centimeter' || value == 'dis'|| value == 'dist' || value == 'distan'){
      window.open("public/Distance.html")
    }

}

})







