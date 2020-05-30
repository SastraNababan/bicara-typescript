# Bicara TypeScript 


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
- Type annotations ( explicit ) `let i:string = hello`
- Type inference ( Implicit ) `let i = "hello"`

### Exercises :
- [ ] Convert all JavaScript Types to TypeScript
- [ ] Function Type
- [ ] Union Type `|`
- [ ] Type Aliases
- [ ] Setup Environtment ( eslint, eslint )
- [ ] Evaluate Typescript Config `tsconfig.json`

## 3. Array & Tuples
There are two ways to declare an array:
1. Using square brackets.
   `let fruits: string[] = ['Apple', 'Orange', 'Banana'];`
2. Using a generic array type. `Array<elementType>`
   `let fruits: Array<string> = ['Apple', 'Orange', 'Banana'];`

### Exercises :
- [ ] Array of Number `[1,2,3,4]`
- [ ] Array of String `['a', 'b', 'c']`
- [ ] Tuple Array ( Fixed ) `[1,'a']`
- [ ] Tuple Array ( Dynamic ) `['a','b', 1, 2]`
- [ ] Array of Object `[{}]`
- [ ] Array multidimensional`[[]]`
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
- [ ] function declaration & expression
- [ ] optional & default parameters
- [ ] rest parameter
- [ ] conditional type with union, generic, overloads