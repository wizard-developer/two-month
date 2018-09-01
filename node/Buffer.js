// process.stdin.on('data', data => {
//   console.log(data)
// })

// let b1 = new Buffer(4);
/*
  位 -> 字节

  0&1 -> 8位
*/


let bf2 = new Buffer('djkloop');

console.log(bf2);
let b3 = new Buffer(10)

b3.fill(96)
console.log(b3)