let time = new Date();
const timeBlock = document.querySelector('#clock');
let startTime;
let timeHTMLNodesArr;

setStartTime();
setInterval(clock, 1000);

function setStartTime(){
    timeBlock.innerHTML = `
    <div class="col-3 row" id="hours">
        <div class="col-3">${parseInt(time.getHours()/10)}</div>
        <div class="col-3 ms-4">${time.getHours()%10}</div>
    </div>
    <div class="col-3 row" id="minutes">
        <div class="col-3">${parseInt(time.getMinutes()/10)}</div>
        <div class="col-3 ms-4">${time.getMinutes()%10}</div>
    </div>
    <div class="col-3 row" id="seconds">
        <div class="col-3">${parseInt(time.getSeconds()/10)}</div>
        <div class="col-3 ms-4">${time.getSeconds()%10}</div>
    </div>
    `
    const hoursBlock = timeBlock.querySelector('#hours').children;
    const minutesBlock = timeBlock.querySelector('#minutes').children;
    const secondsBlock = timeBlock.querySelector('#seconds').children;
    timeHTMLNodesArr = [hoursBlock[0], hoursBlock[1], minutesBlock[0], minutesBlock[1], secondsBlock[0], secondsBlock[1]];
    startTime = [parseInt(time.getHours()/10), time.getHours()%10, time.getMinutes()/10, time.getMinutes()%10, parseInt(time.getSeconds()/10), time.getSeconds()%10]
}
function clock(){
    const time = new Date();
    let currenttime = [parseInt(time.getHours()/10), time.getHours()%10, parseInt(time.getMinutes()/10), time.getMinutes()%10, parseInt(time.getSeconds()/10), time.getSeconds()%10];
    currenttime.forEach((el, index) => {
        if(el != startTime[index]){
            timeHTMLNodesArr[index].innerHTML = el;
            startTime[index] = el;
            console.log(`Updatet element is just: ${timeHTMLNodesArr[index].parentNode.id}`);
        }
    })
}

