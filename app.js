let timerDayNumElm = document.querySelector(".timer__item__num-day")
let timerHourNumElm = document.querySelector(".timer__item__num-hour")
let timerMinuteNumElm = document.querySelector(".timer__item__num-minute")
let timerSecondNumElm = document.querySelector(".timer__item__num-second")


/*units needed
60 seconds in 1 minute
60 minute in 1 hour
24 hours in 1 day
*/



function getTimeDifference(start, end) {
    let milliseconds = Math.floor(end - start);
    /*1000 milliseconds in a second*/
    let seconds = Math.floor(milliseconds / 1000);
    /*60 seconds in a minute*/
    let minutes = Math.floor(seconds / 60);
    /*60 minutes in an hour*/
    let hours = Math.floor(minutes / 60);
    /*24 hours in a day*/
    let days = Math.floor(hours / 24);

    // converts to standard  1(day), 24(hour), 60(minute), 60(seconds) format
    hours = hours - (days * 24);
    /*converting days to minutes & converting hours into minutes as well*/
    minutes = minutes - (days * 24 * 60) - (hours * 60);
    /*converting everything to seconds*/
    seconds = seconds - (days * 24 * 60 * 60) - (hours * 60 * 60) - (minutes * 60);
    /*milliseconds if you wanted them
    milliseconds = milliseconds - (days * 24 * 60 * 60 * 1000) - (hours * 60 * 60 * 1000) - (minutes * 60 * 1000);
    */
    return {
        days,
        hours,
        minutes,
        seconds,
    };
}






let timer = setInterval(function() {
    const startDate = new Date();
    const endDate = new Date("March 21 2021 08:30:00");

    let timeDifferenceObj = getTimeDifference(startDate, endDate);
    /*set the timers text*/
    if(timeDifferenceObj.days < 10) {
        timerDayNumElm.textContent = "0" + timeDifferenceObj.days;
    } else {
        timerDayNumElm.textContent = timeDifferenceObj.days;
    }

    if(timeDifferenceObj.hours < 10) {
        timerHourNumElm.textContent = "0" + timeDifferenceObj.hours;
    } else {
        timerHourNumElm.textContent = timeDifferenceObj.hours;
    }

    if(timeDifferenceObj.minutes < 10) {
        timerMinuteNumElm.textContent = "0" + timeDifferenceObj.minutes;
    } else {
        timerMinuteNumElm.textContent = timeDifferenceObj.minutes;
    }




    if(timeDifferenceObj.seconds < 10) {
        timerSecondNumElm.textContent = "0"  + timeDifferenceObj.seconds;
    } else {
        timerSecondNumElm.textContent = timeDifferenceObj.seconds;
    }



    // stop the timer when all the number reach zero
    if(timeDifferenceObj.days === 0 && timeDifferenceObj.hours === 0 && timeDifferenceObj.minutes === 0 && timeDifferenceObj.seconds === 0) {
        clearInterval(timer);
    };

}, 1000);



























/*
==========
My attempt
==========
*/


/*correct numbers */
    // let dayTimeCounter = 5;
    // let hourTimeCounter = 24;
    // let minuteTimeCounter = 60;
    // let secondTimeCounter = 60;

/*testing numbers */
    // let dayTimeCounter = 1;
    // let hourTimeCounter = 2;
    // let minuteTimeCounter = 3;
    // let secondTimeCounter = 4;



// function timer() {
//     let timeoutTimer = setInterval(_ => {
//         console.log(dayTimeCounter, hourTimeCounter, minuteTimeCounter, secondTimeCounter);
//         /*set the text of the counter(in html)*/
//         timerDayNumElm.textContent = dayTimeCounter;
//         timerHourNumElm.textContent = hourTimeCounter;
//         timerMinuteNumElm.textContent = minuteTimeCounter;
//         timerSecondNumElm.textContent = secondTimeCounter;

//         if(dayTimeCounter === 0 && hourTimeCounter === 0 && minuteTimeCounter === 0 && secondTimeCounter === 0) {
//             clearInterval(timeoutTimer);
//             console.log("timer is done");
//         }

//         if(secondTimeCounter === 0) {
//             minuteTimeCounter-=1;
//             secondTimeCounter += 2;
//         }  else if(minuteTimeCounter === 0) {
//             hourTimeCounter-=1;
//             minuteTimeCounter+=2;
//         } else if(hourTimeCounter === 0) {
//             hourTimeCounter+=2;
//             dayTimeCounter-=1;
//         } else if(dayTimeCounter === 0) {
//             dayTimeCounter-=0;
//             secondTimeCounter--;
//         } else {
//             secondTimeCounter--;
//         }
//     }, 1000)
// }



/*small example */

// let min = 2;
// let sec = 5;


// // when all variables hit 0(min, 1sec) clear the interval
// function timer() {
//     let x = setInterval((_ => {
//         console.log(min, sec)
//         timerMinuteNumElm.textContent = min;
//         timerSecondNumElm.textContent = sec;

//         if(min === 0 && sec === 0) {
//             clearInterval(x)
//             console.log("all done")
//             console.log(min,sec)
//         }

//         if(sec === 0) {
//             min -= 1;
//             sec += 10;
//         } else {
//             sec--;
//         }
//     }), 1000);
// }


// timer() 