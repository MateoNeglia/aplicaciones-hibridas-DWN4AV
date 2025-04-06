import { config } from 'dotenv';
config();

import isPrime from './primeCheck.cjs';

const testNumber = process.env.TEST_NUMBER || 17;
console.log(`¿Es ${testNumber} primo? ${isPrime(Number(testNumber))}`);