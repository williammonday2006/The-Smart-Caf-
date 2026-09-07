// Arrow functions
const calculatePrice = (price, quantity) => price * quantity;

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

console.log("Store Tax:", calculateStoreTax(100));


// Phase 4
function applyDiscount(total, discountCallback) {
    return discountCallback(total);
}

function studentDiscount(total) {
    return total * 0.90;
}

function seniorDiscount(total) {
    return total * 0.80;
}


// Console tests
console.log(
    "Student Discount:",
    applyDiscount(100, studentDiscount)
);

console.log(
    "Senior Discount:",
    applyDiscount(100, seniorDiscount)
);