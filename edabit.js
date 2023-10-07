/* 1) Create a function that takes an array of strings and returns 
an array with only the strings that have numbers in them. 
If there are no strings containing numbers, return an empty array. */

function numInStr(arr) {
  let array = [];
  for (let index = 0; index < arr.length; index++) {
    if (/\d/.test(arr[index])) {
      array.push(arr[index]);
    }
  }
  return array;
}

/*2) Create a function that takes an array of numbers and return "Boom!" 
if the digit 7 appears in the array. Otherwise, return "there is no 7 in the array".*/

function sevenBoom(arr) {
  let array = [];
  for (let index = 0; index < arr.length; index++) {
    array = arr[index].toString();

    if (array.includes("7")) {
      return "Boom!";
    }
  }

  return "there is no 7 in the array";
}
function sevenBoom(arr) {
  let array = [];
  for (let index = 0; index < arr.length; index++) {
    array = arr[index].toString();
  }

  if (array.includes("7")) {
    return "BOOM!";
  } else {
    return "there is no 7 in the array";
  }
}

/*3)Write a function that returns the first digit in a string using a for/while loop
 (digits may be anywhere in the string)
 firstDigit('sdsa3dsad020a2'); => 3
 firstDigit('tdhs020a2'); => 0 */

function firstDigit(str) {
  for (let index = 0; index < str.length; index++) {
    if (!isNaN(str[index]) && str[index] !== " ") {
      return str[index];
    }
  }
}
console.log(firstDigit("sdsa3dsad020a2"));


function firstdigit(chaine){
  let ref = ["1","2","3","4","5","6","7","8","9","0"];
    for ( let i = 0 ; i < chaine.length ; i++ ) {
         if(ref.includes(chaine[i]))
             return chaine[i]

  }
}

/*4) Create a function to find NaN in an array of numbers. The return value should be the index where NaN is found. 
  If NaN is not found in the array, then return -1. */

function findNaN(numbers) {
  for (let index = 0; index < numbers.length; index++) {
    if (isNaN(numbers[index])) {
      return index;
    }
  }
  return -1;
}


