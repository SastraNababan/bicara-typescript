/* eslint-disable prefer-const, @typescript-eslint/no-unused-vars */

export {};
/**
 * 1. Object Literal
 * 2. Nested Object
 * 3. Nested, Object of Array
 * 4. Nested, Object of Object
 * 5. Object destructuring
 */

/********** 1. Object Literal ***********/
/*
  {
    id: "ID-1",
    productName: "Macbook Air",
    price: "2000"
    note: ""
  }
*/

//========= Solution #1 =========
interface Product {
  id: string;
  productName: string;
  price: number;
  note?: "";
}

let macbook: Readonly<Product> = {
  id: "ID-1",
  productName: "Macbook Air",
  price: 2000,
};

// macbook.id = "ID-2";
// macbook = {
//   id: "ID-2",
//   productName: "Macbook Air3",
//   price: 2000,
// };

let mouse: Product = {
  id: "ID-2",
  productName: "Mouse",
  price: 100,
};

/********** 2. Nested Object ***********/
/*
  {
    id: "ID-1",
    productName: "Macbook Pro",
    price: 2000,
    productDetail: {
      year: 2019
      storage: 256 
    }
  }
*/

/*
  {
    id: "ID-1",
    productName: "Macbook Pro",
    price: 2000,
    productDetail: {
      year: 2019
      storage: 256 
    },
    color: ["Space Grey", "Silver"],
*/

//========= Solution #2 =========
interface ProductDetail {
  year: number;
  storage: number;
}
interface Product2 {
  id: string;
  productName: string;
  price: number;
  // productDetail: any;
  // productDetail: {
  //   year: number;
  //   storage: number;
  // };
  productDetail: ProductDetail;
  color?: Array<string>;
}

let mbp: Product2 = {
  id: "ID-1",
  productName: "Macbook Pro",
  price: 2000,
  productDetail: {
    year: 2019,
    storage: 256,
  },
  // color: ["Space Grey", "Silver"],
};

/********** 3. Nested, Array of Object ***********/
/*
    {
      id: "U-1",
      name: "Adi dodi",
      address: [
        {
          street : "Jln. Setapak No.2",
          city: "Jakarta"
        },
        {
          street: "Jln. Lebar sekali no 10",
          city: "Medan"
        }
      ]
    }
*/

//========= Solution #3 =========
interface Address {
  street: string;
  city: string;
}

interface User {
  id: string;
  name: string;
  address: Array<Address>;
}

let user: User = {
  id: "U-1",
  name: "Adi dodi",
  address: [
    {
      street: "Jln. Setapak No.2",
      city: "Jakarta",
    },
    {
      street: "Jln. Lebar sekali no 10",
      city: "Medan",
    },
  ],
};

/********** 4. Nested, Object of Object ***********/

/*
    {
      idCart: "C1",
      dateOrdered: "2020-05-20",
      p1 :{
        "id": "P-1",
        "name": "Mechanical Keyboard",
        "qty": 2
      },
      p2 :{
        "id": "P-2",
        "name": "USB Hub",
        "qty": 1
      },
    }
*/

//========= Solution #4 =========
interface Item {
  id: string;
  name: string;
  qty: number;
}

interface Cart {
  idCart: string;
  dateOrdered: Date;
  items: {
    [key: string]: Item;
  };
}

let keyboard: Cart = {
  idCart: "C1",
  dateOrdered: new Date("2020-05-20"),
  items: {
    p1: {
      id: "P-1",
      name: "Mechanical Keyboard",
      qty: 2,
    },
    p2: {
      id: "P-2",
      name: "USB Hub",
      qty: 1,
    },
  },
};

/********** 5. Object Destructuring ***********/
/*
  let fullName = {
    firstName : "Sastra",
    lastName : "Nababan"
  }
  let {firstName, lastName} = fullName
*/

//========= Solution #5 =========

/**
 * 1. type infere
 * 2. type annoation
 * 3. interface
 * 4. record
 */

let fullName = {
  firstName: "Sastra",
  lastName: "Nababan",
};

// Solution 1: type infere
// let { firstName, lastName } = fullName;

// Solution 2 : type annotation
let { firstName, lastName }: { firstName: string; lastName: string } = fullName;

// Solution 3 : interface
// interface FullName {
//   firstName: string;
//   lastName: string;
// }
// let { firstName, lastName }: FullName = fullName;

// Solution 4 : record ( utility type )
// let { firstName, lastName }: Record<string, unknown> = fullName;

console.log(firstName);
console.log(lastName);
