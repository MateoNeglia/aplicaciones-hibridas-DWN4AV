import { config } from 'dotenv';
config();

import isPrime from './primeCheck.cjs';

const testNumber = process.env.TEST_NUMBER || 17;
const responseToPrime = isPrime(Number(testNumber)) ? 'Lo es! :)' : 'No lo es :(';

console.log(`¿Es ${testNumber} primo? ${responseToPrime}`);