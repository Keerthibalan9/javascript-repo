var firstName = "Ram";
var lastName = "Kumar";
var age = 30;

// Store your birth year in a variable.
var curr="25";

// Store a future year in a variable.
var fut="82";
var amt=120;
var age=fut-curr
var pri=(age*360)*120
var ages=age+curr

console.log("I will need", pri, "to", "last you until the ripe old age of", fut )

// Multiply 5 with 7, alerting the result.

var a=5;
var b=7;
alert(a*b)


// Alert the reminder, once 13 is divided by 7.
var a=13;
var b=7;
alert(a/b)

// Apply the right assignment operator, which will result in x being 20 (the same as x = x + y).
var a=10; a+=10;

// Apply the right assignment operator, which will result in x, being 30.
var a=10; a+=20;



var anchoviesPizzaScore = 0;
var  pepperoniPizzaScore = 4;
var  hawaiianPizzaScore = 4;
var  chickenBaconRanchPizzaScore = 6;
console.log(anchoviesPizzaScore < pepperoniPizzaScore);
console.log(chickenBaconRanchPizzaScore > hawaiianPizzaScore);
console.log(hawaiianPizzaScore > pepperoniPizzaScore);
console.log(pepperoniPizzaScore <= chickenBaconRanchPizzaScore);
console.log(hawaiianPizzaScore >= pepperoniPizzaScore);


let ab=prompt("enter a number");
if (ab>0){
    alert("Sign is +")
}
else if(ab==0){
    alert("No sign")
}
else {
    alert("Sign is -")
}

// -------------------------------------

for (let tri=0;tri<=15;++tri){

if (tri%2==0){
    console.log(tri,"is even")
}
else{
    console.log(tri,"is Odd")
} }


function great(a,b)
{
    if(a>b){
        console.log("A is greater")
    }
    else if(b>a){
        console.log("B is greater")
    }
    else if(a=b){
        console.log("Both are equal")
    }
}
great(10,12)



for (let i = 1; i <= 100; i++) {
    
    console.log(i) 
  
    if (i % 3 == 0){
        console.log("Fizz")
    }
    if (i % 5 == 0){
        console.log("Buzz")
    }
  if (i % 3 == 0 && i % 5 == 0)
   {
    console.log("FizzBuzz") 
  }
}