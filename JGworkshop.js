//Declate customer objects, keys, values.

const timmy = {
    prescription: "acetaminophen",
    pricePerRefill: 25,
    refills: 3,
    subscription: false,
    coupon: true,
};

const sarah = {
    prescription: "diphenhydramine",
    pricePerRefill: 50,
    refills: 1,
    subscription: true,
    coupon: false,
};

const rocky = {
    prescription: "phenylephrine",
    pricePerRefill: 30,
    refills: 5,
    subscription: true,
    coupon: true,
};

//Define a function to calculate total price for a customer and store total price in new variable.

function printTotalPrice(pricePerRefill, refills) {
    console.log(pricePerRefill * refills);
};
// test output
let totalPrice = printTotalPrice(timmy.pricePerRefill, timmy.refills);

//Define a function that applies subscription
// use "if, else" statement to determine if discount should apply.


function printTotalwSub(totalPrice) { 
    console.log(totalPrice * 0.75); 
}; 

function printTotalwCoupon(totalPrice) {
    console.log(totalPrice - 10);
};

let totalwSub = printTotalwSub(totalPrice);
let totalwCoupon = printTotalwCoupon(toalPrice);

if (timmy.subscription = true) {
    console.log(totalwCoupon)
} if (timmy.coupon = true) {
        console.log(totalwCoupon)
} else {console.log(totalPrice)};

//Define a function to calculate and print the grand total.
    
            
        
  