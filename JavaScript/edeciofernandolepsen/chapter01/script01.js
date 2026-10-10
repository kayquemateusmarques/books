// Example 1.6 - Sum of two numbers

const num1 = Number(prompt("Enter the first number: "));
const num2 = Number(prompt("Enter the second number: "));
const sum = num1 + num2;

alert(`The sum is: ${sum}`)

// Example 1.7.1 - Gratuity

const dinner = parseFloat(prompt("Valuable of account: "))
const tax = dinner * 0.1
const total = dinner + tax
alert(`Dinner: $ ${dinner.toFixed(2)}\nMate tip: $ ${tax.toFixed(2)}\nThe total of account is: $ ${total.toFixed(2)}`)