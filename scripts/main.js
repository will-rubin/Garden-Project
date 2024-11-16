let average = (i1, i2, i3) => (i1 + i2 + i3) / 3;

let i1 = Math.floor(Math.random() * 100);
let i2 = Math.floor(Math.random() * 100);
let i3 = Math.floor(Math.random() * 100);

console.log(`The average of ${i1}, ${i2}, and ${i3} is ${average(i1, i2, i3).toFixed(3)}`);