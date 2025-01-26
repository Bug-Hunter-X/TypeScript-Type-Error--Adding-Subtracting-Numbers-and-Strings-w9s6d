function add(a: number, b: number): number {
  return a + b;
}

function subtract(a: number, b: number): number {
  return a - b;
}

const result1 = add(5, 3); // Correct
const result2 = subtract(10, 5); // Correct

const result3 = add(5, parseInt("3")); // Corrected: string to number
const result4 = subtract(10, parseInt("5")); // Corrected: string to number

//Alternative approach: Type Guard
function isNumber(x: any): x is number {
    return typeof x === 'number';
}

function addSafe(a: any, b: any): number {
    if(isNumber(a) && isNumber(b)) {
        return a + b;
    } else {
        throw new Error("Arguments must be numbers");
    }
}

function subtractSafe(a: any, b: any): number {
    if(isNumber(a) && isNumber(b)){
        return a - b;
    } else {
        throw new Error("Arguments must be numbers");
    }
}

const result5 = addSafe(5,"3"); //Throws error
const result6 = subtractSafe(10, "5"); //Throws Error