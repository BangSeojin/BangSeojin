// 1��: ������ ���������� ���� �Ҵ����� ����
let variable1;

// 2��: ������ null ���� �Ҵ�
let variable2 = null;

// 3��: �Լ����� ��ȯ���� ���� (�Ǵ� ��ȯ���� ��������� undefined�� ���)
function returnNothing() {
    // �ƹ� �۾��� �������� ����
}
let variable3 = returnNothing();

// 4��: �Լ��� ���޵��� ���� �Ű�����
function exampleFunction(parameter) {
    console.log(parameter);
}
let variable4 = exampleFunction();

// 5��: �迭 ��Ұ� �������� ����
let array = [1, 2, 3];
let variable5 = array[10];

// 1��
if (variable1 === undefined) {
    console.log("variable1 is undefined");
}

// 2��
if (variable2 === null) {
    console.log("variable2 is null");
}

// 3��
if (variable3 === undefined) {
    console.log("variable3 is undefined");
}

// 4��
if (variable4 === undefined) {
    console.log("variable4 is undefined");
}

// 5��
if (variable5 === undefined) {
    console.log("variable5 is undefined");
}