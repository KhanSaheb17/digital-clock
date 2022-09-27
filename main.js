  setInterval(() => {
  let days = document.getElementById('days');
  let hours = document.getElementById('hours');
  let minutes = document.getElementById('minutes');
  let seconds = document.getElementById('seconds');


  let dd = document.getElementById('dd');
  let hh = document.getElementById('hh');
  let mm = document.getElementById('mm');
  let ss = document.getElementById('ss');

  let second = 1000;
  let minute = second * 60;
  let hour = minute * 60;
  let day = hour * 24;



  let date = new Date("oct 5,2022 20:00:00").getTime();
  let now = new Date().getTime();
  let gap = date - now;
  let d = Math.floor(gap / day);
  let h = Math.floor((gap % day) / hour);
  let m = Math.floor((gap % hour) / minute);
  let s = Math.floor((gap % minute) / second);

  d = d < 10 ? "0" + d : d;
  h = h < 10 ? "0" + h : h;
  m = m < 10 ? "0" + m : m;
  s = s < 10 ? "0" + s : s;



  days.innerHTML = d +" D";
  hours.innerHTML = h + " H";
  minutes.innerHTML = m + " M";
  seconds.innerHTML = s + " S";



dd.style.strokeDashoffset = 295 - (295/13)*d;
hh.style.strokeDashoffset = 295 - (295 /24)*h;
  mm.style.strokeDashoffset = 295 - (295 /60)*m;
  ss.style.strokeDashoffset =295- (295.5 / 60) * s;
});
