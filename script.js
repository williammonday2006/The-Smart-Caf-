// Arrow functions
const calculatePrice = (price, quantity) => price * quantity;

const getTax = (amount, taxRate) => amount * taxRate;


// Phase 2
function calculateStoreTax(amount) {
    const defaultTaxRate = 0.07;

    return getTax(amount, defaultTaxRate);
}


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


// Phase 5
function calculateFinalBill(price, quantity, discountCallback) {
    // Calculate subtotal
    const subtotal = calculatePrice(price, quantity);

    // Apply discount
    const discountedPrice = applyDiscount(subtotal, discountCallback);

    // Calculate tax
    const tax = getTax(discountedPrice, 0.07);

    // Calculate grand total
    return discountedPrice + tax;
}


// Console tests
console.log("Subtotal:", calculatePrice(15, 4));
console.log("Tax:", getTax(60, 0.07));
console.log("Store Tax:", calculateStoreTax(100));

console.log(
    "Student Discount:",
    applyDiscount(100, studentDiscount)
);

console.log(
    "Senior Discount:",
    applyDiscount(100, seniorDiscount)
);

console.log(
    "Final Bill:",
    calculateFinalBill(20, 3, studentDiscount)
);