let number = Math.floor(Math.random() * 10);

let powerOfTwo = number;
while(powerOfTwo < 256){
    powerOfTwo = number*number;
    number++;
    console.log(powerOfTwo);
}