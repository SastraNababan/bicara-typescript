/* eslint-disable prefer-const */

export { };
/**
 * Interface
 * - Inline Interface
 * - Interface Defenition
 * - Optional Property
 * - Readonly Property
 * - Indexable Types
 * - Class Types
 * - Extend Interfaces
 * - Hybrid Types
 * - Interfaces Extending classes
 */

/**
 * Interface vs Type
 * 1. Interface are restrited to an object type
 * 2. Merge can interface, type can't  merge
 * 3. TYPE ALIASES CAN USE COMPUTED PROPERTIES
 */

type info = string;
interface exfo {
  key: string;
}

interface exfo {
  other?: number;
  key: string;
}

// let pw: exfo;

// pw = {
//   key: "123",
// };

interface Contact {
  firstName: string;
  lastName: string;
  languange?: string;
  gender?: string;
}

function submitContant({
  firstName,
  lastName,
  languange = "english",
  gender,
}: Contact) {
  return {
    fullName: firstName + " " + lastName,
    languange,
    gender,
    // ...(gender && { gender }),
  };
}

let inputContact = {
  firstName: "Valen",
  lastName: "Mayer",
  languange: "english",
  gender: "male",
};

let result1 = submitContant(inputContact);
console.log(result1);
