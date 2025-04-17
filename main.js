
/*fetch('data.json')
.then(response => response.json())
.then(data => console.log(data))

console.log(data.title);*/



const work= {
   timeframes: {
    daily: {
        current: 5,
        previous: 7
    },
    weekly: {
        current: 32,
        previous: 36
    },
    monthly: {
        current: 103,
        previous: 128
    }
   }
}

const play= {
    timeframes: {
     daily: {
         current: 1,
         previous: 2
     },
     weekly: {
         current: 10,
         previous: 8
     },
     monthly: {
         current: 23,
         previous: 29
     }
    }
 }

 const study= {
    timeframes: {
     daily: {
         current: 0,
         previous: 1
     },
     weekly: {
         current: 4,
         previous: 7
     },
     monthly: {
         current: 13,
         previous: 19
     }
    }
 }

 const exercise= {
    timeframes: {
     daily: {
         current: 1,
         previous: 1
     },
     weekly: {
         current: 4,
         previous: 5
     },
     monthly: {
         current: 11,
         previous: 18
     }
    }
 }

 const social= {
    timeframes: {
     daily: {
         current: 1,
         previous: 3
     },
     weekly: {
         current: 5,
         previous: 10
     },
     monthly: {
         current: 21,
         previous: 23
     }
    }
 }

 const selfcare= {
    timeframes: {
     daily: {
         current: 0,
         previous: 1
     },
     weekly: {
         current: 2,
         previous: 2
     },
     monthly: {
         current: 7,
         previous: 11
     }
    }
 }


let presentTime= document.getElementsByClassName("present-time");
let previousTime= document.getElementsByClassName("previous-time");
 function loadDataForDaily(){
    console.log('clicked');
    presentTime[0].innerText = `${work.timeframes.daily.current} hrs`;
    previousTime[0].innerText = `Yesterday - ${work.timeframes.daily.previous} hrs`;
    presentTime[1].innerText = `${play.timeframes.daily.current} hrs`;
    previousTime[1].innerText = `Yesterday - ${play.timeframes.daily.previous} hrs`;
    presentTime[2].innerText = `${study.timeframes.daily.current} hrs`;
    previousTime[2].innerText = `Yesterday - ${study.timeframes.daily.previous} hrs`;
    presentTime[3].innerText = `${exercise.timeframes.daily.current} hrs`;
    previousTime[3].innerText = `Yesterday - ${exercise.timeframes.daily.previous} hrs`;
    presentTime[4].innerText = `${social.timeframes.daily.current} hrs`;
    previousTime[4].innerText = `Yesterday - ${social.timeframes.daily.previous} hrs`;
    presentTime[5].innerText = `${selfcare.timeframes.daily.current} hrs`;
    previousTime[5].innerText = `Yesterday - ${selfcare.timeframes.daily.previous} hrs`;


}

function loadDataForWeekly(){
    console.log('clicked');
    presentTime[0].innerText = `${work.timeframes.weekly.current} hrs`;
    previousTime[0].innerText = `Last Week - ${work.timeframes.weekly.previous} hrs`;
    presentTime[1].innerText = `${play.timeframes.weekly.current} hrs`;
    previousTime[1].innerText = `Last Week - ${play.timeframes.weekly.previous} hrs`;
    presentTime[2].innerText = `${study.timeframes.weekly.current} hrs`;
    previousTime[2].innerText = `Last Week - ${study.timeframes.weekly.previous} hrs`;
    presentTime[3].innerText = `${exercise.timeframes.weekly.current} hrs`;
    previousTime[3].innerText = `Last Week - ${exercise.timeframes.weekly.previous} hrs`;
    presentTime[4].innerText = `${social.timeframes.weekly.current} hrs`;
    previousTime[4].innerText = `Last Week - ${social.timeframes.weekly.previous} hrs`;
    presentTime[5].innerText = `${selfcare.timeframes.weekly.current} hrs`;
    previousTime[5].innerText = `Last Week - ${selfcare.timeframes.weekly.previous} hrs`;


}

function loadDataForMonthly(){
    console.log('clicked');
    presentTime[0].innerText = `${work.timeframes.monthly.current} hrs`;
    previousTime[0].innerText = `Last Month - ${work.timeframes.monthly.previous} hrs`;
    presentTime[1].innerText = `${play.timeframes.monthly.current} hrs`;
    previousTime[1].innerText = `Last Month - ${play.timeframes.monthly.previous} hrs`;
    presentTime[2].innerText = `${study.timeframes.monthly.current} hrs`;
    previousTime[2].innerText = `Last Month - ${study.timeframes.monthly.previous} hrs`;
    presentTime[3].innerText = `${exercise.timeframes.monthly.current} hrs`;
    previousTime[3].innerText = `Last Month - ${exercise.timeframes.monthly.previous} hrs`;
    presentTime[4].innerText = `${social.timeframes.monthly.current} hrs`;
    previousTime[4].innerText = `Last Month - ${social.timeframes.monthly.previous} hrs`;
    presentTime[5].innerText = `${selfcare.timeframes.monthly.current} hrs`;
    previousTime[5].innerText = `Last Month - ${selfcare.timeframes.monthly.previous} hrs`;


}