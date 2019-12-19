const stylizeTime = (seconds) => padWithZero(String(Math.floor(seconds/60))) + ":" + padWithZero(String(seconds%60));

const padWithZero = (string, totalLength=2) => ("0"+string).substr(-totalLength)

const readTime = (string) => parseInt(string.slice(0,2))*60 + parseInt(string.slice(3,5))

var sessionLengthInMinutes = 25;
var timer = false;

var element1 = document.getElementById("break-increment")
element1.addEventListener("click", function(){
  let element = document.getElementById("break-length");
  let length = parseInt(element.innerHTML);
  if  (length < 60) {
    element.innerHTML = length + 1;
  };
});

var element2 = document.getElementById("break-decrement")
element2.addEventListener("click", function(){
  let element = document.getElementById("break-length")
  let length = parseInt(element.innerHTML);
  if  (length > 0) {
    element.innerHTML = length - 1;
  };
});

var element3 = document.getElementById("session-increment")
element3.addEventListener("click", function(){
  let element = document.getElementById("session-length")
  let length = parseInt(element.innerHTML);
  if  (length < 60) {
    sessionLengthInMinutes += 1;
    element.innerHTML = sessionLengthInMinutes;
  };
});

var element4 = document.getElementById("session-decrement")
element4.addEventListener("click", function(){
  let element = document.getElementById("session-length")
  let length = parseInt(element.innerHTML);
  if  (length > 0) {
    sessionLengthInMinutes -= 1;
    element.innerHTML = sessionLengthInMinutes;
  };
});

var element5 = document.getElementById("start_stop")
element5.addEventListener("click", function(){
  if (timer) {
    clearInterval(timer);
    timer = false;
  } else {
    timer = setInterval(updateTime, 1000);
  }
});

const updateTime = () => {
  let element = document.getElementById("time-left");
  element.innerHTML = stylizeTime(readTime(element.innerHTML)-1)
};

var element6 = document.getElementById("reset")
element6.addEventListener("click", function(){
  let element = document.getElementById("time-left");
  element.innerHTML = stylizeTime(sessionLengthInMinutes*60);
});

