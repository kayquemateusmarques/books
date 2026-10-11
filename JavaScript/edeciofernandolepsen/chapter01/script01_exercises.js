// 01 - The numebers of your neighbors
const num = parseInt(prompt("Type your number: "))
const neighbor1 = num - 1
const neighbor2 = num + 1
alert(`Neighbors: ${neighbor1} and ${neighbor2}`)

// 02 - The split of bill
const bill = parseFloat(prompt("Type the valuable of bill: "))
const people = parseInt(prompt("Tye the numbers of people: "))
const total = bill / people
alert(`Bill: $ ${bill.toFixed(2)}\nPeople: ${people}\nValuable to each person: $ ${total.toFixed(2)}`)

// 03 - Store
const purchase = parseFloat(prompt("Type the purchase price: "))
const payinfull = purchase * 0.9
const instalments = payinfull / 3
alert(`Purchase: $ ${purchase.toFixed(2)}\nPay in full: $ ${payinfull.toFixed(2)}\nOr 3x: $ ${instalments.toFixed(2)}`)

// 04 - Average
const num1 = parseFloat(prompt("Type your first note: "))
const num2 = parseFloat(prompt("Type your second note: "))
const average = (num1 + num2) / 2  
alert(`First note: ${num1.toFixed(1)}\nSecond note: ${num2.toFixed(1)}\nAverage: ${average.toFixed(1)}`)
