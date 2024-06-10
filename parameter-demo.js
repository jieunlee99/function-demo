// 1. 기본값 매개변수
// 2. 나머지 매개변수
// 3. arguments 객체

function foo1(arg = 1) {
  console.log(arg);
}
foo1(); // 1

function foo2(arg, ...rest) {
  console.log(rest);
}
foo2(1, 2, 3); // [2. 3]

function foo3(arg) {
  console.log(arguments);
}
foo3(1, 2, 3); // [Arguments] { '0': 1, '1': 2, '2': 3 }
