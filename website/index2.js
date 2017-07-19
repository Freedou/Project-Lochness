function updateTimer() {
  future  = Date.parse("August 27, 2017 22:30:00");
  now     = new Date();
  diff    = future - now;

  days  = Math.floor( diff / (1000*60*60*24) );
  hours = Math.floor( diff / (1000*60*60) );
  mins  = Math.floor( diff / (1000*60) );
  secs  = Math.floor( diff / 1000 );

  d = days;
  h = hours - days  * 24;
  m = mins  - hours * 60;
  s = secs  - mins  * 60;

  document.getElementById("timer")
    .innerHTML =

      '<center> <div>' + d + '<span>J </span>' +
      h + '<span>H </span>' +
      m + '<span>M </span>' +
      s + '<span>S</span></div> </center>' ;
}
 setInterval('updateTimer()', 1000 );