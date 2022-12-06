const dayel = document.getElementById("day");
const hourel = document.getElementById("hour");
const minuteel = document.getElementById("minute");
const secondel = document.getElementById("second");

const newyeartime = new Date("Jan 1,2023 00:00:00").getTime();

updatecountdown();

function updatecountdown(){
  const now=new Date().getTime();
  const gap = newyeartime - now;
  
  //millisecond->seconds

  const second = 1000;
  const minute = second*60;
  const hour = minute*60;
  const day = hour*24;

  const remainingDay =Math.floor(gap/day)
  const remainingHour =Math.floor((gap%day)/hour)
  const remainingMinutes =Math.floor((gap%hour)/minute)
  const remainingSeconds =Math.floor((gap%minute)/second)

  dayel.innerText = remainingDay
  hourel.innerText= remainingHour
  minuteel.innerText = remainingMinutes
  secondel.innerText = remainingSeconds

  setTimeout(updatecountdown,1000)
}
