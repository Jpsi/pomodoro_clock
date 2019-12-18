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
    element.innerHTML = length + 1;
  };
});

var element4 = document.getElementById("session-decrement")
element4.addEventListener("click", function(){
  let element = document.getElementById("session-length")
  let length = parseInt(element.innerHTML);
  if  (length > 0) {
    element.innerHTML = length - 1;
  };
});

var element5 = document.getElementById("start_stop")
element5.addEventListener("click", function(){
  // let element = document.getElementById("time-left");
  // setInterval(updateTime, 1000);
});

// var secondsLeft = 25*60;
// export const stylizeTime = (seconds) => String(Math.floor(secondsLeft/60)) + ":" + String(secondsLeft%60);

// function updateTime() {
//   let element = document.getElementById("time-left");
//   // Breaks if format is not mm:ss
//   minutes = parseInt(element.innerHTML.slice(0,2))
//   seconds = parseInt(element.innerHTML.slice(3,5))
//   if (seconds == 0) {
//     minutes -= 1;
//     seconds = 59;
//   } else {
//     seconds -= 1;
//   }
//   element.innerHTML = Number(minutes) + ":" + Number(seconds)
// };


var element6 = document.getElementById("reset")
element6.addEventListener("click", function(){
});
