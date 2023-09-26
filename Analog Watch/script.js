let Hour = document.getElementById('hour');
let Min = document.getElementById('min');
let Sec = document.getElementById('sec');

function displayTime(){

    let date = new Date();

    let hh = date.getHours();
    let mm = date.getMinutes();
    let ss = date.getSeconds();

    let hRotation = 30*hh + mm/2;
    let mRotation = 6*mm;
    let sRotation = 6*ss;

    Hour.style.transform = `rotate(${hRotation}deg)`;
    Min.style.transform = `rotate(${mRotation}deg)`;
    Sec.style.transform = `rotate(${sRotation}deg)`;
}

setInterval(displayTime,1000);