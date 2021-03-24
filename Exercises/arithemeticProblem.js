var numberOne = 45;
var numberTwo = 51;

if( numberOne===50 || numberTwo===50){
    console.log("This is a magical number");
}
else if(numberOne+numberTwo===50){
  console.log("A magical Number");
}

else {
  console.log("Not a magical number");
}

//Another option for same exercise

var numberOne = 45;
var numberTwo = 51;


var result =
  numberOne == 50 || numberTwo == 50
    ? true
    : numberOne + numberTwo == 50
    ? true
    : false;

if (result) {
  console.log("Magical Number");
} else {
  console.log("not a magical number");
}
