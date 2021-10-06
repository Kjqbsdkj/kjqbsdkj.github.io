var birth;
var year = false;
var nextyear = 2022
var newyear = "1 jan "+nextyear.toString();
window.addEventListener("DOMContentLoaded",main);
function main(){
    
    const d = document.getElementById("days");
    const h = document.getElementById("hours");
    const m = document.getElementById("minutes");
    const s = document.getElementById("seconds");
    

    getbirth();
    
    setInterval(() => {
        let now = Date.now();
        let date = birth - now;
        if (date > 0){   
            const div = document.querySelector(".container");
            div.innerHTML = '<div class="days"><div id="days"></div><p class="p">days</p></div><div class="hours same"><div id="hours"></div><p class="p">hours</p></div><div class="minutes same"><div id="minutes"></div><p class="p">minutes</p></div><div class="seconds same"><div id="seconds"></div><p class="p">seconds</p></div>';       
            div.style.fontSize = "100px";
            const d = document.getElementById("days");
            const h = document.getElementById("hours");
            const m = document.getElementById("minutes");
            const s = document.getElementById("seconds");
            let days = Math.floor(date / (1000*3600*24));
            let hours = Math.floor((date % (1000*3600*24))/(1000*3600));
            let minutes = Math.floor(((date % (1000*3600*24))%(1000*3600)) / (1000*60));
            let seconds = Math.floor(((((date % (1000*3600*24))%(1000*3600*60)) % (1000*3600)) % (1000*60))/ 1000);
            days = days.toString();
            hours = hours.toString();
            minutes = minutes.toString();
            seconds = seconds.toString();    
            if (days.length < 2){
                days = "0" + days;
            }
            if (hours.length < 2){
                hours = "0" + hours;
            }
            if (minutes.length < 2){
                minutes = "0" + minutes;
            }
            if (seconds.length < 2){
                seconds = "0" + seconds;
            }
            d.textContent = days;
            h.textContent = hours;
            m.textContent = minutes;
            s.textContent = seconds;


        }else if(date > -86400000 && date < 0 && year === false){
            const div = document.querySelector(".container");
            div.innerHTML = "Happy BirthDay !!";
            div.style.fontSize = "100px";
            
        }else if (date < -86400000) {
            const div = document.querySelector(".container");
            div.innerHTML = "Sorry but your birthDay is already passed!";
            div.style.fontSize = "55px";

            

        }else if(date > -86400000 && date < 0 && year === true){
            const div = document.querySelector(".container");
            div.innerHTML = "Happy New Year !!";
            div.style.fontSize = "100px";
            

        }else if (date < -86400000  && year === true) {
            nextyear += 1;
            getbirth(r = true);
            
        }
        

    },1000);
    

}


function getbirth(r = false){
    var body = document.querySelector("#bod");
    if (r){
        body.style.backgroundImage = "url('/img/newyear.jpg')";
        body.style.animationName = "opai";
        body.style.animationDuration = "2s";
        birth =  Date.parse(newyear);
        year = true;
        return 0;
    }
    body.style.backgroundImage = "url('/img/newyear.jpg')";
    body.style.backgroundImage = "url('/img/birthday.jpg')";
    const birthday = prompt("type your birth day ex:(15 Jul 2021)");
    birth =  Date.parse(birthday);
    if (year === true){
        year = false;}
    
    if (isNaN(birth)){
        getbirth();
    }
    
}
