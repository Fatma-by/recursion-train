
/*1)Using a for loop THEN a while loop
 Write a JavaScript function that will iterate from 0 to n. For each iteration,
 it will check if the current number is odd or even, and display a message on the screen.
 iterateAndLog(3);*/

 /*for*/

function iterateAndLogWithFor(n) {
  for (let index = 0; index <= n; index++) {
    if (index % 2 === 0) {
      console.log(`${index} is even`);
    } else {
      console.log(`${index} is odd`);
    }
  }
}
iterateAndLogWithFor(20);

/*while*/

function iterateAndLogWithFor(n) {
  let index = 0;
  while (index <= n) {
    if (index % 2 === 0) {
      console.log(`${index} is even`);
    } else {
      console.log(`${index} is odd`);
    }
    index++;
  }
}
let c = iterateAndLogWithFor(20);
console.log(c);

/*2) Using a for loop THEN a while loop
 Write a function that:
 Loop through the numbers 1 to n
 If the number is divisible by 3, print "Julia"
 If the number is divisible by 5, print "James"
 If the number is divisible by 3 and 5, print "JuliaJames"
 If the number is not divisible by 3 or 5, print the number*/

 /*for*/

function weirdDivisionWithFor(n) {
  for (let index = 1; index <= n; index++) {
    if (index % 3 === 0) {
      console.log("Julia");
    } else if (index % 5 === 0) {
      console.log("James");
    } else if (index % 3 === 0 && index % 5 === 0) {
      console.log("JuliaJames");
    } else if (index % 3 !== 0 && index % 5 !== 0) {
      console.log(n);
    }
  }
}
weirdDivisionWithFor(30);

/*while*/

function weirdDivisionWithFor(n) {
    let index = 1;
    while (index <= n) {
        
      if (index % 3 === 0) {
        console.log("Julia");
      } else if (index % 5 === 0) {
        console.log("James");
      } else if (index % 3 === 0 && index % 5 === 0) {
        console.log("JuliaJames");
      } else if (index % 3 !== 0 && index % 5 !== 0) {
        console.log(n);
      }
      index++
    }
  }
  weirdDivisionWithFor(5);

  /*recrusion*/

  function weirdDivisionWithFor(n) {

    if (n===0) return n;

    if (n % 3 === 0 && n % 5 === 0) {
        console.log("Julia");
      } else if ( n % 3 === 0) {
        console.log("James");
      } else if (n % 5 === 0) {
        console.log("JuliaJames");
      } else if (n % 3 !== 0 && n % 5 !== 0) {
        console.log(n);
      }

      weirdDivisionWithFor(n-1)

    }

    weirdDivisionWithFor(5)

