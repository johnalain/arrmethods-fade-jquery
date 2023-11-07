//sort method
// const fruits =["apple","banana", "orange","grape" ];
// fruits.sort();
// console.log(fruits);

// const numbers = [100, 20, 200,30];
// numbers.sort((a, b) => a - b);
// console.log(numbers);

//push
// const numbers = [1, 2, 3];
// numbers.push(4, 5);
// console.log(numbers);

// const numbers = [1, 3, 5];
// const lastNumber = numbers.pop();
// console.log(lastNumber);

//shift method
// const numbers = [1, 3, 5];
// const firstNumber = numbers.shift();
// console.log(firstNumber);

// const numbers = [1, 3, 5];
// numbers.unshift(0, -1);
// console.log(numbers);

// const numbers = [1, 2, 3, 4, 5];
// const foundNumber = numbers.find( num => num >3);
// console.log(foundNumber);

// const numbers = [1, 2, 3, 4, 5];
// const hasEvenNumber = numbers.some((num) => num % 2===0);
// console.log(hasEvenNumber);

// const numbers = [1, 2, 3, 4, 5];
// const allEvenNumber = numbers.every((num) => num % 2===0);
// console.log(allEvenNumber);

// const numbers = [1, 2, 3, 4, 5];
// const includeThree = numbers.includes(3);
// console.log(includeThree);

// const numbers = [1, 2, 3, 4, 5];
// const sliceNumbers = numbers.slice(0 ,3);//slice(start index,endindex excluded end)
// console.log(sliceNumbers);

// const numbers = [1,2,3];
// const doubleNumber=numbers.map((num) => num*2);
// console.log(doubleNumber);

// const numbers = [1, 2, 3, 4, 5];
// const filterNumber = numbers.filter((num) => num%2===0);
// console.log(filterNumber);

// const numbers = [1, 2, 3, 4, 5];
// const reduceNumber= numbers.reduce((total, num) => total + num,0);
// console.log(reduceNumber);

// const fruits =["apple","banana", "orange","grape" ];
// const indexApple =fruits.indexOf('apple');
// console.log(indexApple);


const fruits =["apple","banana", "orange","grape","apple" ];
const lastAppleIndex =fruits.lastIndexOf('apple');
console.log(lastAppleIndex);

// const numbers = [1, 2, 3];
// numbers.reverse();
// console.log(numbers);

const numbers = [1, 2, 3];
const moreNumbers =[6, 5, 6];
const allNumbers = numbers.concat(moreNumbers);
console.log(allNumbers);


