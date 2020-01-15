export interface Operation {
    operation: ((a: number, b: number) => number);
    text: string;
}

export interface Formula {
    a: number;
    b: number;
    operation: Operation;
    result: number;
}


const sum: Operation = {operation: (a, b) => a + b, text: '&plus;'};
const difference: Operation = {operation: (a, b) => a - b, text: '&minus;'};
const multiplication: Operation = {operation: (a, b) => a * b, text: '&times;'};
// const division: Operation = {operation: (a, b) => a / b, text: '&divide;'};

const operations: Operation[] = [sum, difference, multiplication];


export const newRandomNumber: (max: number) => number = (max) => Math.floor(Math.random() * max) + 1;

export const newOperation: () => Operation = () => operations[newRandomNumber(operations.length) - 1];



