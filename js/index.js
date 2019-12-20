var sessionLengthInMinutes = 25;
var timer = false;
var element_ids = ["time-left",
                   "break-length",
                   "break-increment",
                   "break-decrement",
                   "session-length",
                   "session-increment",
                   "session-decrement",
                   "start_stop",
                   "reset"];
var elements = {};
for (let element of element_ids) {
  elements[element] = document.getElementById(element);
}

const stylizeTime = (seconds) => padWithZero(String(Math.floor(seconds/60))) + ":" + padWithZero(String(seconds%60));

const padWithZero = (string, totalLength=2) => ("0"+string).substr(-totalLength);

const readTime = (string) => parseInt(string.slice(0,2))*60 + parseInt(string.slice(3,5));

const updateTime = () => elements["time-left"].innerHTML = stylizeTime(readTime(elements["time-left"].innerHTML)-1);

const resetTime = () => elements["time-left"].innerHTML = stylizeTime(sessionLengthInMinutes*60);

resetTime();

elements["reset"].addEventListener("click", resetTime);


elements["break-increment"].addEventListener("click", function(){
  let length = parseInt(elements["break-length"].innerHTML);
  if  (length < 60) {
    elements["break-length"].innerHTML = length + 1;
  };
});

elements["break-decrement"].addEventListener("click", function(){
  let length = parseInt(elements["break-length"].innerHTML);
  if  (length > 0) {
    elements["break-length"].innerHTML = length - 1;
  };
});

elements["session-increment"].addEventListener("click", function(){
  let length = parseInt(elements["session-length"].innerHTML);
  if  (length < 60) {
    sessionLengthInMinutes += 1;
    elements["session-length"].innerHTML = sessionLengthInMinutes;
  };
});

elements["session-decrement"].addEventListener("click", function(){
  let length = parseInt(elements["session-length"].innerHTML);
  if  (length > 0) {
    sessionLengthInMinutes -= 1;
    elements["session-length"].innerHTML = sessionLengthInMinutes;
  };
});

elements["start_stop"].addEventListener("click", function(){
  if (timer) {
    clearInterval(timer);
    timer = false;
  } else {
    timer = setInterval(updateTime, 1000);
  }
});



