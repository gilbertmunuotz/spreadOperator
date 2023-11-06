//The spread operator can be used to pass an iterable object as multiple arguments to a function.
function add(a, b) {
    return (a + b)
}

const numbers = [2, 3];
console.log(add(...numbers));

//The spread operator can be used to combine two or more arrays into a single array. 
const Num1 = [1, 2];
const Num2 = [3, 4];

const addedNumbers = [...Num1, ...Num2];
console.log(addedNumbers);

//The spread operator can be used to copy the properties of one object to another object.
const person = {
    name: 'klay',
    age: 21,
}

const updatePerson = {
    ...person,
    occupation: 'Programmer',
}

console.log(updatePerson);



