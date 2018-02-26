var thePrice= 20;
var studentDiscount=.10;
var studentPrice = thePrice - (thePrice*studentDiscount);


var elPrice = document.getElementById('price');
elPrice.textContent = thePrice;

var elStudentPrice = document.getElementById('student-price');
elStudentPrice.textContent = studentPrice;
