let variable1;

let variable2 = null;

function returnNothing() {
    // 아무 작업도 수행하지 않음
}
let variable3 = returnNothing();

function exampleFunction(parameter) {
    console.log(parameter);
}
let variable4 = exampleFunction();

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
