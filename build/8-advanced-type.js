"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function updateTodo(currentTodo, itemTodo) {
    return { ...currentTodo, ...itemTodo };
}
const todo1 = {
    title: 'organize desk',
    description: 'clear clutter',
};
const todo2 = updateTodo(todo1, {
    description: 'throw out trash',
});
let j;
j = {
    hello: '123',
    number: 123,
};
const x = {
    '1': {
        name: 'test',
        number: 1,
    },
    '2': {
        name: 'test',
        number: 1,
    },
};
const store = {
    '0d3d8fhd': { availability: 'in_stock', amount: 23 },
    '0ea43bed': { availability: 'sold_out', amount: 0 },
    '6ea7fa3c': { availability: 'sold_out', amount: 0 },
};
