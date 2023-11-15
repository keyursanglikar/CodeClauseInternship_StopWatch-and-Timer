const secondHand =document.getElementById('second-hand');
const minuteHand= document.getElementById('minute-hand');
const hourHand = document.getElementById('hour-hand');


function clockTick(){

    const date= new Date();
    const seconds = date.getSeconds() / 60;
    const minutes = (seconds + date.getMinutes()) / 60;
    const hours =  (minutes + date.getHours()) / 12;
     

    rotateClockHand(secondHand,seconds);
    rotateClockHand(minuteHand, minutes);
    rotateClockHand( hourHand , hours);
}

function rotateClockHand(element, rotation){
  element.style.setProperty('--rotate' ,rotation *360);


}

setInterval( clockTick ,1000);











//Stopwatch script Code //



let [seconds, minutes, hours]=[0,0,0];
let DisplayTime = document.getElementById("DisplayTime");
let timer =null;
function stopwatch(){
    seconds++;
    if(seconds == 60){
        seconds=0;
        minutes++;
        if(minutes ==60){
            minutes=0;
            hours++;

        }
    }

    let h = hours <10 ? "0" + hours: hours;
    let m = minutes <10 ? "0" + minutes: minutes;
    let s = seconds <10 ? "0" + seconds: seconds;

    DisplayTime.innerHTML = h +":" + m +":" + s;
}


function watchStart(){
    if (timer!==null)
    {
       clearInterval(timer); 
    }
    timer= setInterval(stopwatch,1000);

}

function watchStop(){
    clearInterval(timer); 
}

function watchReset(){
    clearInterval(timer); 
    [seconds, minutes, hours]=[0,0,0];
    DisplayTime.innerHTML = "00:00:00";
}
