// ##### Exercise: Level 1

//1.
const empty = Array();
//2.
const arr = Array(1,2,3,4,5,6,7);
//3.
console.log(arr.length);
//4.
console.log(arr[0]);
console.log(arr[3]);
console.log(arr[arr.length - 1]);
//5.
const mixedDataTypes = [
    1,
    2,
    3,
    {strings: ['hello', 'world', '!']}
];
console.log(arr.length);
//6.
const itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon'];
//7.
console.log(itCompanies);
//8.
console.log(itCompanies.length);
//9.
console.log(itCompanies[0]);
console.log(itCompanies[3]);
console.log(itCompanies[itCompanies.length - 1]);
//10.
console.log(itCompanies.join(', '));
//11.
const upper = [];
itCompanies.forEach(element => {
    upper.push(element.toUpperCase());
});

console.log(upper);
//12.
console.log(itCompanies.join(', '));
//13.
let index = itCompanies.indexOf('Apple');
  if (index != -1 ) {
    console.log('Apple');
  } else {
    console.log('not found');
};
//14.
let indexofit = itCompanies.indexOf('o');
if (indexofit != +1) {
    console.log(itCompanies.slice(indexofit)) //fix
} else {
    console.log("didn't work");
};

