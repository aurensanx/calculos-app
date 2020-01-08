import {MAX_OPERATOR} from '../../../app.settings';

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

const newRandomNumber: (max: number) => number = (max) => Math.floor(Math.random() * max);

const newOperation: () => Operation = () => operations[newRandomNumber(operations.length)];


export const getNewFormula: () => Formula = () => {
    const a = newRandomNumber(MAX_OPERATOR);
    const b = newRandomNumber(MAX_OPERATOR);
    const operation = newOperation();
    return {a, b, operation, result: operation.operation(a, b)};
};
