// Write your code here
const num1 = 31;
const num2 = 2;
const multiply = num1 * num2;
console.log(multiply);

const random = Math.floor(Math.random() * 10) + 1;
console.log(random);


let num3 = 16;
let num4 = 6;
const mod = num3 % num4;
console.log(mod);

const max = Math.max(1,2,5.5,5,6,3,20);
const trueNumber = function() {
    if (max === 20) {
        return 'Yes it is the biggest number';
    }
};
console.log(max);
console.log(trueNumber());
