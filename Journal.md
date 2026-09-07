# Phase 1
The calculatePrice function is a function declaration because it uses the function keyword followed by the function name. The function is declared directly and can be called by its name. The getTax function is a function expression because the function is assigned to a variable called getTax. The function itself does not have a name after the function keyword. Both functions can perform calculations, but the main syntax difference is how the function is created and assigned. I used the function declaration for calculatePrice and a function expression for getTax to practice both ways of creating functions.

# Phase 2 
When I tried to log defaultTaxRate outside of the calculateStoreTax function, the browser gave me a ReferenceError saying that defaultTaxRate was not defined. This happened because defaultTaxRate is a local variable. It was declared inside the calculateStoreTax function, so it can only be accessed from inside that function. Variables declared inside a function are not available outside of that function. This demonstrates function scope in JavaScript. Keeping variables inside the function also prevents other parts of the program from accidentally changing or depending on them.

# Phase 3 Journal
Arrow functions provide a shorter syntax for writing functions. Instead of using the function keyword, I use => to create the function. For example, the original calculatePrice function used braces and a return statement. The arrow function can return the result directly:
const calculatePrice = (price, quantity) => price * quantity;
Because there is only one expression, the result is automatically returned. This is called an implicit return. I found the concise syntax easier to read for these simple calculations because there is less code. However, for more complicated functions that require multiple statements, using braces and an explicit return may be easier to understand.

# Phase 4 Journal
applyDiscount is considered a Higher-Order Function because it accepts another function as a parameter. The discountCallback parameter allows a different discount function to be passed into applyDiscount. studentDiscount and seniorDiscount are callback functions. They are passed into applyDiscount, which then calls the appropriate callback to calculate the discounted price. This makes the discount system flexible because applyDiscount does not need to know which specific discount is being used. If I wanted to apply no discount, I could create a noDiscount function that simply returns the original total:
function noDiscount(total) { return total; }
This could then be passed to applyDiscount just like the other discount functions.

# Phase 5 Journal
Breaking the order process into small, single-purpose functions made calculateFinalBill easier to write because each function already handles one specific calculation. calculatePrice handles the subtotal, applyDiscount handles the discount callback, and getTax handles the tax calculation. The calculateFinalBill function simply combines these functions in the correct order. If I put all of the math into one long block of code, the function would be harder to read and maintain. Using smaller functions also makes the code reusable. For example, I can use different discount callbacks without changing the main calculateFinalBill function. This approach makes the program easier to understand because each function has one clear responsibility.
