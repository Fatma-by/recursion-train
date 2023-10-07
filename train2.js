/* 1) Using a for loop THEN a while loop THEN Recursively
 Write a function called laugh() that takes one parameter,
 num that represents the number of "ha"s to return.
 laugh(6); => "hahahahahaha" */

/*for*/

function laugh(n) {
  let str = "";
  for (let index = 0; index < n; index++) {
    str = str + "ha";
  }
  console.log(str);
}
laugh(3);

/*while*/

function laugh(n) {
  let str = "";

  let index = 0;

  while (index < n) {
    str = str + "ha";
    index++;
  }
  console.log(str);
}
laugh(4);

/*Recursively*/

function laugh(n) {
  let str = "";
  if (n === 0) return str;
  else {
    str = str + "ha";
    str = str + laugh(n - 1);
  }

  return str;
}

let r = laugh(4);
console.log(r);

/* 2) Using a for loop THEN a while loop THEN recursion
 Write a function that takes a string and returns the same string reversed
 reverse('abc'); => 'cba'
 reverse('erf4') => '4fre'*/
/*for*/

function reverseWithWhile(str) {
  let result = "";

  for (let index = str.length - 1; index >= 0; index--) {
    result = result + str[index];
  }
  return result;
}
console.log(reverseWithWhile("abs"));

/*while*/

function reverseWithWhile(str) {
  let result = "";
  let index = str.length - 1;

  while (index >= 0) {
    result = result + str[index];
    index--;
  }
  return result;
}
console.log(reverseWithWhile("abs"));

/*recursion*/

function reverseWithWhile(str) {
  if (str.length <= 1) {
    return str;
  } else {
    return reverseWithWhile(str.slice(1)) + str[0];
  }
}

console.log(reverseWithWhile("abcdef"));

/*Using a for loop OR a while loop
 You are given an integer. Return the sum of its digits.
 Example:
 addDigits(29); => 11
 addDigits(90); => 9
 addDigits(1231635132132); => 33*/

function addDigits(num) {
  let sum = 0;
  let numStr = num.toString();
  let numArray = [];
  for (let index = 0; index < numStr.length - 1; index++) {
    numArray.push(Number(numStr[index]));

    sum = sum + numArray[index];
  }
  console.log(numArray, sum);
}
addDigits(1234562152);
