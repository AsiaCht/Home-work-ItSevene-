const startBtn = document.querySelector('#start'),
stopBtn = document.querySelector('#stop'),
resetBtn = document.querySelector('#reset');
const stopwatch = document.querySelector('.stopwatch');

const Value = () => {
  document.querySelector('.hour').innerText = hr;
  document.querySelector('.min').innerText = min;
  document.querySelector('.sec').innerText = sec;
  document.querySelector('.mil').innerText = mil;
}

let hr = min = sec = mil = '0'+ 0,
startTimer,
fInterval = false;
const start = () =>{
  stopwatch.style.backgroundColor = 'green'
   startTimer = setInterval(() => {
    mil++
    mil = mil < 10 ? '0' + mil:mil;
    if(mil == 100){
      sec++
      sec = sec < 10 ? '0' + sec:sec;
      mil = '0' + 0;
    }
    if(sec == 60 ){
      min++
      min = min < 60 ? '0'+ min:min;
      sec = '0' + 0;
    }
    if(min == 60 ){
      hr++
      hr = min < 10 ? '0'+ hr:hr;
      min = '0' + 0;
    }
    fInterval = true;
    Value()
   },10)
}
const stop = () =>{
  stopwatch.style.backgroundColor = 'red';
  clearStop()
}
const reset = () =>{
  stopwatch.style.backgroundColor = 'grey';
  hr = min = sec = mil = '0'+ 0;
  Value();
  clearStop();
}  
startBtn.addEventListener('click', start);
stopBtn.addEventListener('click', stop);
resetBtn.addEventListener('click', reset);

const clearStop = () =>{
  clearInterval(startTimer);
}

