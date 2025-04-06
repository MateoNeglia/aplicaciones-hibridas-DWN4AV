import { config } from 'dotenv';
config();

import isPrime from './primeCheck.js';

const testNumber = process.env.TEST_NUMBER || 17;
console.log(`Is ${testNumber} prime? ${isPrime(Number(testNumber))}`);