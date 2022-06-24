import { testData, testData2, testData3, testData4 } from './data';
import { arrayFind } from './utils/1_arrayFind';
import { arrayAvg } from './utils/2_arrayAvg';
import { arrayChunk } from './utils/3_arrayChunk';
import { arraySkip } from './utils/4_arraySkip';
import { arrayContains } from './utils/5_arrayContains';
import { arrayGet } from './utils/6_arrayGet';

  
console.log(
    arrayGet(testData4 as [], '[17][0][0][0][11][0][name]')
);