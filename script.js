// Function declaration
function calculatePrice(price, quantity) {
    return price * quantity;
}

// Function expression
const getTax = function(amount, taxRate) {
    return amount * taxRate;
};

// Console tests
const subtotal = calculatePrice(15, 4);
const tax = getTax(subtotal, 0.07);

console.log("Subtotal:", subtotal);
console.log("Tax:", tax);