// Arrow function
const calculatePrice = (price, quantity) => price * quantity;

// Arrow function with implicit return
const getTax = (amount, taxRate) => amount * taxRate;


// Phase 1 tests
const subtotal = calculatePrice(15, 4);
const tax = getTax(subtotal, 0.07);

console.log("Subtotal:", subtotal);
console.log("Tax:", tax);


// Phase 2
function calculateStoreTax(amount) {
    const defaultTaxRate = 0.07;

    return getTax(amount, defaultTaxRate);
}

// Console test
console.log("Store Tax:", calculateStoreTax(100));

// This would cause an error because defaultTaxRate is local.
// console.log(defaultTaxRate);