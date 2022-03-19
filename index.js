const record = [
  { year: "2015", result: "W" },
  { year: "2014", result: "N/A" },
  { year: "2013", result: "L" },
  //...
];

const superbowlWin = (array1) => {
  const winner = array1.find((array1) => array1.result === "W");
  return winner ? winner.year : undefined;
};

superbowlWin(record);


// //conditional ternary

// condition ? exprIfTrue : exprIfFalse

// //arrow

//   find((element) => { /* ... */ } )

// //callback

// find(callbackFn)

// //inline function

// find(function (element) { /* ... */ })

// // find an object by one of its properties

// const inventory = [
//     {name: 'apples', quantity: 2},
//     {name: 'bananas', quantity: 0},
//     {name: 'cherries', quantity: 5}
//   ];

//   function isCherries(fruit) {
//     return fruit.name === 'cherries';
//   }

//   console.log(inventory.find(isCherries));
