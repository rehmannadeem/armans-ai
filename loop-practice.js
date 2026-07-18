/*const cartItems = [
    { name: "Laptop", price: 1200 },
    { name: "Mouse", price: 25 },
    { name: "Keyboard", price: 75 }
];

let subtotal = 0;

// Standard for loop tracks the index (i)
for (let i = 0; i < cartItems.length; i++) {
    subtotal += cartItems[i].price;
}

const totalWithTax = subtotal * 1.15; // Adding 15% tax
console.log(`Grand Total: $${totalWithTax}`); 
// Output: Grand Total: $1495
*/

let clients = ["Ahmed", "Sara", "Bilal", "Ayesha", "Ali"];
for (let client of clients) {
    console.log(`Hello ${client}, welcome to Armans.AI!`);
}