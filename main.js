console.log('Hello World!');

setInterval(() =>{
  let hours = document.getElementById('hours');
  let minutes = document.getElementById('minutes');
  let seconds = document.getElementById('seconds');
  let ampm = document.getElementById('ampm');
  let days = document.getElementById('days');
  let months = document.getElementById('months');
  let years = document.getElementById('years');
  let hh = document.getElementById('hh');
  let mm = document.getElementById('mm');
  let ss = document.getElementById('ss');

  
  let d = new Date();
  let h = d.getHours();
  let m = d.getMinutes();
  let s = d.getSeconds();
  let ap = h >= 12 ? "pm" : "am";
  
  let day = d.getDate();
  let month = d.getMonth()+1;
  let year = d.getFullYear();
  
  h = h >12 ? h-12 : h;
  h= h<10? "0"+h : h;
  m= m<10? "0"+m : m;
  s= s<10? "0"+s : s;
  
  day= day<10? "0"+day : day;
  month= month<10? "0"+month : month;
  year= year<10? "0"+year : year;
  
  
  
  hours.innerHTML = h;
  minutes.innerHTML = m;
  seconds.innerHTML = s;
  ampm.innerHTML = ap;
 
 
  days.innerHTML ="Date : "+" " + day;
  months.innerHTML = month;
  years.innerHTML = year;
  
  
  hh.style.strokeDashoffset = 295 - (295.5*h)/12;
  mm.style.strokeDashoffset = 295 - (295.5*m)/60;
  ss.style.strokeDashoffset = 295 - (296.5*s)/60;
});

