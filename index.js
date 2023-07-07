const hourEL = document.getElementById("hour") 
const minutesEL = document.getElementById("minutes") 
const secondsEL = document.getElementById("seconds") 
const ampmEL = document.getElementById("ampm") 
 
function digitalClock(){ 
    let h = new Date().getHours() 
    let m = new Date().getMinutes() 
    let s = new Date().getSeconds() 
    let ampm = "PM" 
 
    if(h >12){ 
        h = h - 12 
        ampm = "AM" 
    } 
    h = h<10 ? "0" + h : h; 
    m = m<10 ? "0" + m : m; 
    s = s<10 ? "0" + s : s; 
 
hourEL.innerText = h; 
minutesEL.innerText = m; 
secondsEL.innerText = s; 
ampmEL, (innerText = ampm); 
setTimeout(()=>{ 
digitalClock() 
}, 1000) 
 
 
} 
 
digitalClock()
