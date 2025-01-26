function add(a: number, b: number): number {
  return a + b;
}

function subtract(a: number, b: number): number {
  return a - b;
}

const result1 = add(5, 3); // Correct
const result2 = subtract(10, 5); // Correct

const result3 = add(5, "3"); // Type Error
const result4 = subtract(10, "5"); // Type Error