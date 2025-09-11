



#### 1) What is the difference between var, let, and const?

#### Ans:
We can change the value of a "var" variable after we declared the value. 
We can change the value of a "let" variable after we declared the value. 
We can not change the value of a "const" variable after we declared the value. 



#### 2) What is the difference between map(), forEach(), and filter()? 
When we perform the "map()" method it will Always returns a new array with the same number of elements as the original, but with the transformed values.It will always returns a new array.

When we perform the "filter()" method it will select 'items from an array' based on a condition we set.it will returns a new array with only the items that passed the condition we set inside the filter(). 

forEach() perform an action for each item in an array.this forEach() method will not return a new array; it will returns undefined. 

#### 3) What are arrow functions in ES6?
'Arrow functions' are basically a shorthand method for creating 'functions', this method is useful for anonymous functions and callbacks.
Ex:
const wordLevel = (x, y) => {
  let result = x * y;
  return result;
};
wordLevel (2, 4);

#### 4) How does destructuring assignment work in ES6?

Destructuring assignment in ES6 is a 'method' that allows to extract values from arrays or properties from objects and assign them to individual variables.

Ex:
const student = { name: 'Alice', location: 'Dhaka' };
const { name, location } = student;

console.log(name); // 'Alice'
console.log(location); // 'Dhaka'

#### 5) Explain template literals in ES6. How are they different from string concatenation?
In "Template literals" method we use backticks (` `) for multiline code, instead of single(' ') or double quotes(" "). 
