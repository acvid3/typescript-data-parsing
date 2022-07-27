import { testData, testData2, testData3, testData4 } from './data';
import { arrayFind } from './utils/1_arrayFind';
import { arrayAvg } from './utils/2_arrayAvg';
import { arrayChunk } from './utils/3_arrayChunk';
import { arraySkip } from './utils/4_arraySkip';
import { arrayContains } from './utils/5_arrayContains';
import { arrayGet } from './utils/6_arrayGet';
import { arraySearch } from './utils/7_arraySearch';
import { arrayCombine } from './utils/8_arrayCombine';
import { arrayNormalize } from './utils/9_arrayNormalize';

  
console.log(
    arrayNormalize(testData4 as [], {age: 'number'}, false)
);