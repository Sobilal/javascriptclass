// people need to enter into an hospital
// if they have PatientID --> enter into the hospital ---> if loop

// if they have PatientID --> enter if they have id or else type dont enter into hospital'\

// if they have PatientID
// elseif you have employee ID
// else if you are a doctor
// else if you are surgeon
// else dont enter

// write above case both in else if and switch case


var patientId = false;
var employeeId, doctor, surgeon = true;

if(patientId){
  console.log("Enter into hospital");
}
else if(employeeId, doctor, surgeon){
  console.log("Special permission")
}

else{
  console.log("Can't enter into hospital");
}


var admission="patientId";
switch (admission){
  case "patientId":
  console.log("enter into the hospital");
  break;
  case "doctor":
  console.log("enter into the hospital");
  break;
  case "employee":
  console.log("enter into the hospital");
  break;
  case "surgeon":
  console.log("enter into the hospital");
  break;
 default: console.log("enter into the hospital");
}


// find the sum of first 10 digits using loops 1+2+3+....+10 =
// while loop and for loop

var numbers = [1,2,3,4,5,6,7,8,9,10];
var indvalue=0;
var sum=0;

for (var i=0; i<numbers.length; i++){

indvalue=numbers[i];
sum=sum+indvalue;
}
console.log(sum);



var numbers = [1,2,3,4,5,6,7,8,9,10];
var indvalue=0;
var sum=0;
var i=numbers.length-1;
while(i>=0)
{
indvalue=numbers[i];
sum=sum+indvalue;
i--;
}
console.log(sum);


