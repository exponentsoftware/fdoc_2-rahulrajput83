/*  Using the countries array create the following array of arrays. The country name, the first three letters of the country name and the length of the country name. */

const countries = [
    'ALBANIA',
    'BOLIVIA',
    'CANADA',
    'DENMARK',
    'ETHIOPIA',
    'FINLAND',
    'GERMANY',
    'HUNGARY',
    'IRELAND',
    'JAPAN',
    'KENYA'
  ]
  /* createArrayOfArrays(countries)
[
  ['Albania', 'ALB', 7],
  ['Bolivia', 'BOL', 7],
  ['Canada', 'CAN', 6],
  ['Denmark', 'DEN', 7],
  ['Ethiopia', 'ETH', 8],
  ['Finland', 'FIN', 7],
  ['Germany', 'GER', 7],
  ['Hungary', 'HUN', 7],
  ['Ireland', 'IRE', 7],
  ['Japan', 'JAP', 5],
  ['Kenya', 'KEN', 5]
] */

const newArray = []

function createArray() {
    for(let i = 0; i < countries.length; i++) {
        const createNewArray = [];
        createNewArray.push(countries[i]);
        let str = countries[i][0];
        str += countries[i][1];
        str += countries[i][2];
        createNewArray.push(str)
        const length = countries[i].length;
        createNewArray.push(length);
        newArray.push(createNewArray);
    }
    return newArray;
}

console.log(createArray());