let year = 2017;
if ( (year % 4 == 0) || (year % 100 ==0) || (year % 400 == 0)) {
    console.log("Leap year");
}
else{
    console.log("Not a Leap year");
}