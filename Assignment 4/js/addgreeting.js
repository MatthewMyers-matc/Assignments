//greeting changes baised on time of day

var today = new Date();
var hourNow = today.getHours();
var greeting;

if(hourNow > 17){
  greeting = 'Good Evening';
}
else if(hourNow < 17 && hourNow > 12){
  greeting = 'Good Afternoon';
}
else if(hourNow < 12 && hourNow > 0){
  greeting = 'Good Morning';
}
else {
  greeting = 'Hello User';
}

document.write('<h1>' + greeting + '</h1>');
