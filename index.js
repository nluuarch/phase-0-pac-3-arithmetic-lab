function add(x, y) {
    return x + y;
  }

function subtract(x, y) {
    return x - y;
}

function multiply(x, y) {
    return x * y;
}

function divide(x, y) {
    return x / y;
}

let string = "2.5";

function makeInt(string) {
    return parseInt(string, 10);
}

function increment(n) {
    return (n += 1);
}

function decrement(n) {
    return (n -= 1);
}

function preserveDecimal(string) {
    return parseFloat(string);
}

console.log(makeInt(string));

console.log(parseFloat(string));
