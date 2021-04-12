let number = 1;

let randomNumber = Math.floor(Math.random()  * 10) % 7 + 1;

console.log("Number readed is : "+ randomNumber);
switch(randomNumber){
    case 1:console.log("Sunday"); break;
    case 2:console.log("Monday"); break;
    case 3:console.log("Tuesday"); break;
    case 4:console.log("Wednesday"); break;
    case 5:console.log("Thursday"); break;
    case 6:console.log("Friday"); break;
    case 7:console.log("Saturday"); break;
    default : console.log("Wrong number");
}
