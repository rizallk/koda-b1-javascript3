// JavaScript 3 - Minitask 1
// Reverse Manual & Built-in Function

const numbers = [1, 2, 3, 4, 5];
let newNumbers = '';

console.log(`Urutan awal : ${numbers}`);

// Cara reverse manual
for (let i = numbers.length - 1; i >= 0; i--) {
  newNumbers += i !== 0 ? `${numbers[i]},` : `${numbers[i]}`;
}
console.log(`Urutan reverse (manual) : ${newNumbers}`);

// Cara reverse menggunakan built-in function
console.log(`Urutan reverse (built-in) : ${numbers.reverse()}`);
