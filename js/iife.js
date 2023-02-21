const { log: print } = console;

// ? with anynomous arrow function
// (() => {
//     print("Hello guys")
// })()

// ? Private variables and methods from closure

// let increment = (() => {
//     let counter = 0;
//     print(counter)
//     const credit = (num) => print(`I have ${num} credit(s)`);
//     return () => {counter++; credit(counter)}
// })()

// increment()
// credit(4) // ref error;

// The module pattern

// const Score = (() => {
//   let score = 0;
//   print(score)
//   return {
//     current: () => print(score),
//     increment: () => score++,
//     reset: () => (score = 0),
//   };
// })();

// Score.increment()
// Score.current()
// Score.increment()
// Score.current()
// Score.increment()
// Score.current()
// Score.reset()
// Score.current()

((nameSpace) => {
  nameSpace.count = 0;
  nameSpace.current = function () {
    return `App count is ${this.count}`;
  };
  nameSpace.increment = function () {
    this.count++;
  };
  nameSpace.reset = function () {
    this.count = 0;
  };
})((window.App = window.App || {}));
App.increment();
print(App.current())
App.increment();
print(App.current())