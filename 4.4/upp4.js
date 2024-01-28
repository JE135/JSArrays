// Map

// Skapar en ny array genom att applicera en funktion på varje element i den ursprungliga arrayen.
const numbers = [1, 2, 3];
const doubledNumbers = numbers.map((num) => num * 2);
// doubledNumbers blir nu [2, 4, 6]


// Push

// Lägger till ett eller flera element i slutet av arrayen och returnerar den nya längden.
const fruits = ['apple', 'banana'];
fruits.push('orange');
// fruits blir nu ['apple', 'banana', 'orange']



// Pop

// Tar bort det sista elementet från arrayen och returnerar det borttagna elementet.
const fruit1 = ['apple', 'banana', 'orange'];
const removedFruit1 = fruits.pop();
// removedFruit blir nu 'orange', fruits blir ['apple', 'banana']


// Shift

// Tar bort det första elementet från arrayen och returnerar det borttagna elementet.
const fruit2 = ['apple', 'banana', 'orange'];
const removedFruit2 = fruits.shift();
// removedFruit blir nu 'apple', fruits blir ['banana', 'orange']


// Unshift

// Lägger till ett eller flera element i början av arrayen och returnerar den nya längden.
const fruit3 = ['banana', 'orange'];
fruit3.unshift('apple');
// fruits blir nu ['apple', 'banana', 'orange']


// Concat

// Returnerar en ny array genom att sammanfoga två eller flera befintliga arrayer.
const fruit4 = ['apple', 'banana'];
const vegetables = ['carrot', 'spinach'];
const combinedArray = fruit4.concat(vegetables);
// combinedArray blir nu ['apple', 'banana', 'carrot', 'spinach']


// Splice

// Förändrar innehållet i en array genom att ta bort eller ersätta befintliga element och/eller lägga till nya element.
const number1 = [1, 2, 3, 4, 5];
number1.splice(2, 2, 6, 7);
// numbers blir nu [1, 2, 6, 7, 4, 5]
// 2: indexet där förändringarna börjar, 2: antalet element som ska tas bort, 6 och 7: element att lägga till


