#!/usr/bin/env node

const args = process.argv.slice(2);

const operations = {
  add: (a, b) => a + b,
  sub: (a, b) => a - b,
  mul: (a, b) => a * b,
  div: (a, b) => {
    if (b === 0) {
      throw new Error('Division by zero is not allowed.');
    }
    return a / b;
  }
};

function printHelp() {
  console.log('Node.js Calculator App');
  console.log('Usage: node app.js <operation> <number1> <number2>');
  console.log('Operations: add, sub, mul, div');
  console.log('Examples:');
  console.log('  node app.js add 5 3');
  console.log('  node app.js sub 10 4');
  console.log('  node app.js mul 6 7');
  console.log('  node app.js div 12 4');
}

function main() {
  if (args.length !== 3 || args[0] === 'help') {
    printHelp();
    return;
  }

  const [operation, first, second] = args;
  const a = Number(first);
  const b = Number(second);

  if (!operations[operation]) {
    console.error(`Unknown operation: ${operation}`);
    printHelp();
    process.exit(1);
  }

  if (Number.isNaN(a) || Number.isNaN(b)) {
    console.error('Both operands must be valid numbers.');
    process.exit(1);
  }

  try {
    const result = operations[operation](a, b);
    console.log(`${a} ${operation} ${b} = ${result}`);
  } catch (error) {
    console.error(error.message);
    process.exit(1);
  }
}

main();
