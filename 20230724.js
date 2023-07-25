// 1번: 변수를 선언하지만 값을 할당하지 않음
let variable1;

// 2번: 변수에 null 값을 할당
let variable2 = null;

// 3번: 함수에서 반환값이 없음 (또는 반환값이 명시적으로 undefined인 경우)
function returnNothing() {
    // 아무 작업도 수행하지 않음
}
let variable3 = returnNothing();

// 4번: 함수에 전달되지 않은 매개변수
function exampleFunction(parameter) {
    console.log(parameter);
}
let variable4 = exampleFunction();

// 5번: 배열 요소가 존재하지 않음
let array = [1, 2, 3];
let variable5 = array[10];

// 1번
if (variable1 === undefined) {
    console.log("variable1 is undefined");
}

// 2번
if (variable2 === null) {
    console.log("variable2 is null");
}

// 3번
if (variable3 === undefined) {
    console.log("variable3 is undefined");
}

// 4번
if (variable4 === undefined) {
    console.log("variable4 is undefined");
}

// 5번
if (variable5 === undefined) {
    console.log("variable5 is undefined");
}