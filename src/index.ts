//          1 (1бал)
//          Сделать функцию поиска значений в массиве.

//          Синтаксис: array_find(arr: array, search: string|regex): string|number[]|null
//          Пример: 
//          let result = array_find(testData, '/^raf.*/i') // ["Rafshan"]
//          let result2 = array_find(testData, "Rafshan") // ["Rafshan"]

import { testData, testData2, testData3 } from './data';
import { arrayFind } from './utils/arrayFind';
import { arrayAvg } from './utils/arrayAvg'
  
console.log(
    arrayAvg(testData, true)
);