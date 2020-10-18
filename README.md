# Bicara TypeScript

This repo contain resource of Bicara Typescript.
[Youtube Series for Learn Typescript](https://www.youtube.com/SastraNababan?sub_confirmation=1)


**Branches :**

`master` : [starter code](https://github.com/SastraNababan/bicara-typescript/tree/master)

`finish` : [finish code](https://github.com/SastraNababan/bicara-typescript/tree/finish)

## 1. JavaScript vs TypeScript Types

|     | Javascript | Typescript   |
| --- | ---------- | ------------ |
| 1   | undefined  | undefined    |
| 2   | boolean    | boolean      |
| 3   | number     | number       |
| 4   | string     | string       |
| 5   | bigint     | number       |
| 6   | symbol     | symbol       |
| 7   | null       | null         |
| 8   | object     | object       |
| 9   | function   | function     |
| 10  | -          | any          |
| 11  | -          | union        |
| 12  | -          | intersection |
| 13  | -          | enum         |
| 14  | -          | void         |
| 15  | -          | advance type |

**Notes :**

- 1-6 are Primitive Data Types
- All primitives are immutable. A primitive is not an object and has no methods of its own.
- Null is special primitive
- All types in TypeScript are subtypes of a single top type called the Any type.

### Exercises :

- [ ] Evaluate all JavaScript Types
- [ ] undefined vs null vs not defined
- [ ] Cons & Pros Dynamic Type

## 2. Typescript Types

How to declare typescript type :

- Type inference ( implicit ) `let ti = "hello"`
- Type annotations ( explicit ) `let ta:string = "hello ts"`

### Exercises :

- [ ] Convert all JavaScript Types to TypeScript
- [ ] Function Type
- [ ] Union Type `|`
- [ ] Type Aliases
- [ ] Setup Environtment ( eslint, prettier )

## 3. Array & Tuples

Tuples is an array with fixed size and known data types.

There are few ways to declare an array:

1. Using Type Inference
   `let list = [1, 2, 3, 4];`
2. Using square brackets. `elementType[]`
   `let fruits: string[] = ['Apple', 'Orange', 'Banana'];`
3. Using a generic array type. `Array<elementType>`
   `let fruits: Array<string> = ['Apple', 'Orange', 'Banana'];`

### Exercises :

- [ ] Array of Number
- [ ] Array of String
- [ ] Array with Union
- [ ] Tuple
- [ ] Array of Object
- [ ] Array multidimensional
- [ ] Destructuring

## 4. Object

Object is a type that represents the non-primitive type, i.e. anything that is not `number, string, boolean, bigint, symbol, null, or undefined`

### Exercises :

- [ ] Object Literal
- [ ] Nested Object
- [ ] Nested, Object of Array
- [ ] Nested, Object of Object ( Dynamic Properties)
- [ ] Destructuring
- [ ] Utility Types ( `ReadOnly, Record` )

## 5. Functions

Functions are the building blocks of readable, maintainable, and reusable code. A function is a set of statements to perform a specific task. Functions organize the program into logical blocks of code.

### Exercises :

- [ ] function basic : declaration,expression, arrow
- [ ] optional & default parameters
- [ ] rest parameter
- [ ] conditional type with union, generic, overloads

## 6. Classes

- [ ] class basic : constructor, properties, method
- [ ] access modifiers (private, public, private)
- [ ] inheritance / sub-class
- [ ] static member
- [ ] abstract classes

| access modifier | class | sub-class | instance |
| --------------- | ----- | --------- | -------- |
| public          | ✅    | ✅        | ✅       |
| protected       | ✅    | ✅        | ❌       |
| private         | ✅    | ❌        | ❌       |

## 7. Interface vs Type

| Feature              | Interface | Type |
| -------------------- | --------- | ---- |
| aliases              | ❌         | ✅    |
| object               | ✅         | ✅    |
| merge                | ✅         | ❌    |
| Intersection & Union | ❌         | ✅    |
| implementes          | ✅         | ✅    |
| extend               | ✅         | ❌    |

## 8. Advanced Type
- [ ] Partial `Partial<T>`
- [ ] Required `Required<T>`
- [ ] Readonly  `Readonly<T>`
- [ ] Pick `Pick<T, K>`
- [ ] Omit `Omit<T, K>`
- [ ] Record `Record<K,T>`
- [ ] Extract `Extract<T, U>`
- [ ] Exclude `Exclude<T,U>`
