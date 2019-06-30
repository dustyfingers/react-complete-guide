// Spread and Rest operators

const oldObject = {
    name: 'Jenny',
    age: 44
}
const oldArray = [1, 3, 5, 6];

// SPREAD SYNTAX
const newArray = [...oldArray, 1, 2, 3];
const newObject = { ...oldObject, height: '5.5ft' }


// REST SYNTAX
// used in function args list
function sortArgs(...args) {
    return args.sort();
}