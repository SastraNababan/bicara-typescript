/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prefer-const */

export {}; // quick fix for global variable

interface Todo {
    title: string;
    description: string;
}

function updateTodo(currentTodo: Todo, itemTodo: Partial<Todo>) {
    return { ...currentTodo, ...itemTodo };
}

const todo1 = {
    title: 'organize desk',
    description: 'clear clutter',
};

const todo2 = updateTodo(todo1, {
    description: 'throw out trash',
});

// let i: {};
let j: Record<string, string | number>;
j = {
    hello: '123',
    number: 123,
};

// interface ProductInCart {
//     id: string;
//     amount: number;
//     name: string;
//     label?: string;
// }

// class CartModel {
//     products: Record<string, ProductInCart> = {};
// }

// let Cart: ProductInCart = {
//     id: '1',
//     amount: 2,
//     name: 'jhon',
// };

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

interface xType {}

type ProductID = string;
type AvailabilityTypes = 'sold_out' | 'in_stock' | 'pre_order';
interface Availability {
    availability: AvailabilityTypes;
    amount: number;
}
// store.ts
const store: Record<ProductID, Availability> = {
    '0d3d8fhd': { availability: 'in_stock', amount: 23 },
    '0ea43bed': { availability: 'sold_out', amount: 0 },
    '6ea7fa3c': { availability: 'sold_out', amount: 0 },
};
