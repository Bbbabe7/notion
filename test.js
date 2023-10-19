// D-day
const myDate1 = new Date('Dec 31, 2023 23:59:59');
const myDate2 = new Date('Oct 22, 2023 23:59:59');

// timer function
let timer = setInterval(function() {

  // datetime
  const today = new Date();
  const yymmdd = today.getFullYear() + '.' + (today.getMonth()+1) + '.' + today.getDate();
  const day = today.toString().slice(0, 3);  
  const ampm = today.getHours() < 12 ? "AM" : "PM";
  const h24 = today.getHours();
  const hh24 = String(h24).padStart(2, '0');
  const mi = today.getMinutes();
  const mi00 = String(mi).padStart(2, '0');
  const ss = today.getSeconds();
  const ss00 = String(ss).padStart(2, '0');
  const hhmmss = `${hh24}:${mi00}:${ss00}`;

  document.getElementById("date").innerHTML=`<p>${yymmdd}  ${day}</p>`;
  document.getElementById("now").innerHTML=`<p>${hhmmss} ${ampm}</p>`;
  
  // logic
  const timeList = ['10:00 ~ 11:00', '11:00 ~ 15:00', '15:00 ~ 16:30', '16:30 ~ 19:00']
  const iconSmall = {work : "fa-solid fa-business-time fa-1x", chat : "fa-regular fa-comments fa-1x"};
  const iconLarge = {work : "fa-solid fa-business-time fa-fade fa-2x", chat : "fa-regular fa-comments fa-bounce fa-2x"}
  const iconColor = {work : "#ffd500", chat : "#00d5ff"}


  
  let next;
  let icon1;
  let icon2;
  let color;
  let now = document.getElementById("now");

//   let test = document.getElementById("test")

  if (h24 == 10) {
    next = timeList[1]
    icon1 = iconSmall.work
    icon2 = iconLarge.chat
    color = iconColor.chat
    now.style.color = iconColor.chat
  } else if (h24 >= 11 && h24 < 15) {
    next = timeList[2]
    icon1 = iconSmall.chat
    icon2 = iconLarge.work
    color = iconColor.work
    now.style.color = iconColor.work
  } else if (h24 == 15 || (h24 == 16 && mi < 30)) {
    next = timeList[3]
    icon1 = iconSmall.work
    icon2 = iconLarge.chat
    color = iconColor.chat
    now.style.color = iconColor.chat
  } else if ((h24 == 16 && mi >= 30) || (h24 >= 17 && h24 < 19)) {
    next = timeList[0]
    icon1 = iconSmall.chat
    icon2 = iconLarge.work
    color = iconColor.work
    now.style.color = iconColor.work
  } else {
    next = timeList[0]
    icon1 = iconSmall.chat
    icon2 = "fa-regular fa-clock fa-2x"
    color = "#ffffff"
  }

  

  // get the difference
    const diff1 = myDate1 - today;
    const diff2 = myDate2 - today;

  // math
    let days1 = Math.floor(diff1 / (1000 * 60 * 60 * 24));
    let days2 = Math.floor(diff2 / (1000 * 60 * 60 * 24));

  // display
  
  document.getElementById("iconSmall").innerHTML=`<i class="${icon1}" style="color: #ffffff;"></i>&nbsp`;
  document.getElementById("next").innerHTML=`<p>${next}</p>`;
  document.getElementById("iconLarge").innerHTML=`<i class="${icon2}" style="color: ${color};"></i>&nbsp`;

  
//   document.getElementById("days").innerHTML=days1
//   document.getElementById("hours").innerHTML=days2
// document.getElementById("minutes").innerHTML=days3
// document.getElementById("seconds").innerHTML=days4



}, 1);
