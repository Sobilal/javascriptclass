//if loops

var ticket = true;
var seniorCitizen= true;

if (ticket===true){
  console.log("enter the bus");
}

//if elese loop

if (ticket){
  console.log("enter the bus");
}
else{
  console.log("dont enter the bus");
}

//else if

if (ticket){
  console.log("enter the bus");
}
else if(seniorCitizen){
  console.log("Enter the bus");
}
else{
  console.log("dont enter the bus");
}



//while loop

var terminalCapacity=5;
var bus=0;

while(terminalCapacity>0){
  bus++;
console.log(`park the bus ${bus}`);
terminalCapacity--;
}
if (terminalCapacity===0){
  console.log("teminal is full")
}

//for loop
var tc;
var bus=0;

for(tc=1; tc<=5; tc++){
  console.log(`Park the bus ${tc}`);
}


var tc;
var bus=0;

for(tc=5; tc>=1; tc--){
  bus++
  console.log(`Park the bus ${bus}`);
}

//switch case
var ticket="normalticket";
switch (ticket){
  case "normalticket":
  console.log("enter into the bus");
  break;
  case "women":
  console.log("enter into the bus");
  break;
  case "kids":
  console.log("enter into the bus");
  break;
 default: console.log("dont enter the bus");
}

