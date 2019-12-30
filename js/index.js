var defaultSessionLengthInMinutes = 25;
var defaultBreakLengthInMinutes = 5;
var sessionLengthInMinutes = defaultSessionLengthInMinutes;
var breakLengthInMinutes = defaultBreakLengthInMinutes;
var timer = false;
var isReset = false;
var inSession = true;
var element_ids = ["time-left",
                   "timer-label",
                   "break-length",
                   "break-increment",
                   "break-decrement",
                   "session-length",
                   "session-increment",
                   "session-decrement",
                   "start_stop",
                   "reset",
                   "beep"];
var elements = {};
for (let element of element_ids) {
  elements[element] = document.getElementById(element);
}

const stylizeTime = (seconds) => padWithZero(String(Math.floor(seconds/60))) + ":" + padWithZero(String(seconds%60));

const padWithZero = (string, totalLength=2) => ("0"+string).substr(-totalLength);

const readTime = (string) => parseInt(string.slice(0,2))*60 + parseInt(string.slice(3,5));

const updateTime = () => {
  if (elements["time-left"].innerHTML == "00:00") {
    if (inSession) {
      elements["time-left"].innerHTML = stylizeTime(breakLengthInMinutes*60-1);
      elements["timer-label"].innerHTML = "Break"
      inSession = false;
    } else {
      elements["time-left"].innerHTML = stylizeTime(sessionLengthInMinutes*60-1);
      elements["timer-label"].innerHTML = "Session"
      inSession = true;
    }
  } else {
    if (elements["time-left"].innerHTML == "00:01") {
      elements["beep"].play();
    }
    elements["time-left"].innerHTML = stylizeTime(readTime(elements["time-left"].innerHTML)-1);
  }
}

const stopTimer = () => {
  if (timer) {
    clearInterval(timer);
    timer = false;
  } else {
    throw "Timer is not running"
  }
}

const resetTime = () => {
  elements["beep"].pause();
  elements["beep"].currentTime = 0;
  if (timer) {
    stopTimer()
  }
  elements["time-left"].innerHTML = stylizeTime(defaultSessionLengthInMinutes*60);
  sessionLengthInMinutes = defaultSessionLengthInMinutes;
  breakLengthInMinutes = defaultBreakLengthInMinutes;
  elements["session-length"].innerHTML = sessionLengthInMinutes;
  elements["break-length"].innerHTML = breakLengthInMinutes;
  isReset = true;
}

resetTime();

// Event listeners 

elements["reset"].addEventListener("click", resetTime);

elements["break-increment"].addEventListener("click", () => {
  let length = parseInt(elements["break-length"].innerHTML);
  if  (length < 60) {
    breakLengthInMinutes += 1;
    elements["break-length"].innerHTML = breakLengthInMinutes;
  };
});

elements["break-decrement"].addEventListener("click", () => {
  let length = parseInt(elements["break-length"].innerHTML);
  if  (length > 0) {
    breakLengthInMinutes -= 1;
    elements["break-length"].innerHTML = breakLengthInMinutes;
  };
});

elements["session-increment"].addEventListener("click", () => {
  let length = parseInt(elements["session-length"].innerHTML);
  if  (length < 60) {
    sessionLengthInMinutes += 1;
    elements["session-length"].innerHTML = sessionLengthInMinutes;
    if (!timer && isReset) {
      elements["time-left"].innerHTML = stylizeTime(sessionLengthInMinutes*60)
    }
  };
});

elements["session-decrement"].addEventListener("click", () => {
  let length = parseInt(elements["session-length"].innerHTML);
  if  (length > 0) {
    sessionLengthInMinutes -= 1;
    elements["session-length"].innerHTML = sessionLengthInMinutes;
    if (!timer && isReset) {
      elements["time-left"].innerHTML = stylizeTime(sessionLengthInMinutes*60)
    }
  };
});

elements["start_stop"].addEventListener("click", () => {
  if (timer) {
    stopTimer()
  } else {
    if (isReset && (readTime(elements["time-left"].innerHTML) != sessionLengthInMinutes*60)) {
      elements["time-left"].innerHTML = stylizeTime(elements["session-length"].innerHTML*60);
    }
    isReset = false;
    timer = setInterval(updateTime, 1000);
  }
});
