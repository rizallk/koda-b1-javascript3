// 20 built-in method javascript
// ================================
// 1. Date.now()
const now = Date.now();
console.log(now);

// 2. Date.parse()
const ISOTime = Date.parse('2003-04-21T00:00:00Z');
console.log(ISOTime);

// 3. Math.round()
const numRound = Math.round(12.6);
console.log(numRound);

// 4. Math.floor()
const numFloor = Math.floor(5.76);
console.log(numFloor);

// 5. Math.max()
const numMax = Math.max(3, 6);
console.log(numMax);

// 6. Math.min()
const numMin = Math.min(9, 2);
console.log(numMin);

// 7. string.toUpperCase()
const str1 = 'rizal';
console.log(str1.toUpperCase());

// 8. string.toLowerCase()
const str2 = 'KADAMONG';
console.log(str2.toLowerCase());

// 9. string.split()
const str3 = 'Halo dunia';
console.log(str3.split(' '));

// 10. string.replace()
const str4 = 'Halo kamu dimana';
console.log(str4.replace('kamu', 'aku'));

// 11. array.push()
const arr1 = [1, 2, 3];
arr1.push('4');
console.log(arr1);

// 12. array.pop()
const arr2 = ['Mangga', 'Apel', 'Jeruk'];
arr2.pop();
console.log(arr2);

// 13. array.forEach()
const arr3 = [1, 2, 3, 4, 5];
arr3.forEach((v) => {
  console.log(v);
});

// 14. array.map()
const arr4 = [1, 2, 3, 4, 5];
const newArr4 = arr4.map((v) => {
  return v * 2;
});
console.log(newArr4);

// 15. array.filter()
const arr5 = [2, 3, 4, 5];
console.log(arr5.filter((num) => num >= 4));

// 16. Object.keys()
const obj1 = {
  first: 'ini string',
  second: 13,
  third: true,
};
console.log(Object.keys(obj1));

// 17. Object.values()
const obj2 = {
  first: 'ini string',
  second: 13,
  third: true,
};
console.log(Object.values(obj2));

// 18. Object.entries()
const obj3 = {
  first: 'ini string',
  second: 13,
  third: true,
};
console.log(Object.entries(obj3));

// 19. Object.fromEntries()
const entries = [
  ['first', 'ini string'],
  ['second', 13],
  ['third', true],
];
console.log(Object.fromEntries(entries));

// 20. boolean.toString()
const flag = new Boolean(true);
console.log(flag.toString());

// 5 built-in function javascript
// ================================
// 1. Number()
const str5 = '13';
console.log(Number(str5));

// 2. Boolean()
const bool = 'true';
console.log(Boolean(bool));

// 3. String()
const num = 85;
console.log(String(num));

// 4. isNaN()
const str6 = 'test';
console.log(isNaN(str6));

// 5. isFinite()
const num1 = 1000;
console.log(isFinite(num1));
