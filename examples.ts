//You can explicitly describe this object’s shape using an interface declaration:

interface User {
    name: string;
    id: number;
  }

const user11: User = { // by using syntax like : TypeName You can declare a JavaScript object that conforms to the shape of your new interface
    name: "name",
    id: 0
}

// everything has to be well planned. TS will warn  you about any mistake like the following:

// const user21: User = {
//     name: "name",
//     username: "test", // TS type error
//     id: 0
// }

// Since JavaScript supports classes and object-oriented programming, so does TypeScript. You can use an interface declaration with classes:

interface User2 {
    name: string;
    id: number;
  }
   
class UserAccount {
    name: string;
    id: number;

    constructor(name: string, id: number) {
      this.name = name;
      this.id = id;
    }
}
   
const user: User2 = new UserAccount("Murphy", 1);


// -------------------------- Separator -------------------------- //


// You’ll see that there are two syntaxes for building types:

//Interfaces

//Types

//You should prefer interface. Use type when you need specific features.


// -------------------------- Separator -------------------------- //


// Composing Types
// Unions

type MyBool = true | false // we are declaring that a type could be one of many types

// we can describe a set of string or number literals that a value is allowed to be

type WindowStates = "open" | "closed" | "minimized";
type LockStates = "locked" | "unlocked";
type PositiveOddNumbersUnderTen = 1 | 3 | 5 | 7 | 9;

// Generics
// Generics provide variables to types. A common example is an array. An array without generics could contain anything. An array with generics can describe the values that the array contains.
// en este ejemplo, le estamos diciendo a unas variables cuales van a ser los tipos de  valores guardados en una variable

type StringArray = Array<string>;
type NumberArray = Array<number>;
type ObjectWithName_Array = Array<{ name: string }>;


// -------------------------- Separator -------------------------- //


/*
Structural Type System
One of TypeScript’s core principles is that type checking focuses on the shape that values have. This is sometimes called “duck typing” or “structural typing”.

In a structural type system, if two objects have the same shape, they are considered to be of the same type.
*/

interface Point {
    x: number;
    y: number;
}
   
function logPoint(p: Point) {
    console.log(`${p.x}, ${p.y}`);
}
   
const point = { x: 12, y: 26 };
logPoint(point); // logs "12, 26"
const point3 = { x: 7, y: 24, z:20 };
logPoint(point3); // logs "7, 24"

const color = { hex: "#756382"};
// logPoint(color); // logs "error"

/*
The point variable is never declared to be a Point type. However, TypeScript compares the shape of point to the shape of Point in the type-check. They have the same shape, so the code passes.
*/

// There is no difference between how classes and objects conform to shapes:

class VirtualPoint {
    x: number;
    y: number;
   
    constructor(x: number, y: number) {
      this.x = x;
      this.y = y;
    }
  }
   
  const newVPoint = new VirtualPoint(13, 56);
  logPoint(newVPoint); // logs "13, 56"