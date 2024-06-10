// 1. 즉시 실행 함수 (IIFE)
(function foo1() {
  console.log("foo1");
})();

// 2. 재귀함수
function foo2(arg) {
  if (arg === 3) return;
  console.log(arg);
  foo2(arg + 1);
}
foo2(1);

// 3. 중첩함수
function foo3(arg) {
  function bar() {
    console.log(arg);
  }
  bar();
}
foo3(1);

// 4. 콜백함수
function foo4(arg) {
  arg();
}
foo4(() => {
  console.log(1);
});
