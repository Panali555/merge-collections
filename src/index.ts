// src/index.ts
import { merge } from './merge';

const collection_1 = [1, 4, 7];          // ascending
const collection_2 = [2, 5, 8, 9];       // ascending
const collection_3 = [10, 6, 3];         // descending (10 > 6 > 3)

const merged = merge(collection_1, collection_2, collection_3);
console.log('Merged result:', merged);

