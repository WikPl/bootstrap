console.log('Czytanie z tabeli:');
const numbers = [1, 2, 3, 4, 5, 6]

for (let i = 0; i < numbers.length; i++){
    console.log(numbers[i]);
}

console.log('Dodawanie i mnożenie trzech argumentów w funkcji:');
function addMultiplyArguments(arg1, arg2, arg3) {
    console.log(arg1 + arg2 * arg3);
}

addMultiplyArguments(1, 2, 3)

console.log('Czy długość tablicy jest większa niż 5?');
if (numbers.length > 5) {
    console.log('TRUE');
}
else {
    console.log('FALSE');
}

console.log(`Tablica z cyframi ma ${numbers.length} elementów.`);