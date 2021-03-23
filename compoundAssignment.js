//find sum of all the numbers
var myNumbers = [1,2,3,4,5];

var addTotal=0;
var multilyTotal=1;

myNumbers.forEach((x)=>{
addTotal +=x;
});

console.log("total sum is:" +addTotal);

myNumbers.forEach((x)=>{
    multiplyTotal *=x;
    });
    
    console.log("total sum is:" +multiplyTotal);

