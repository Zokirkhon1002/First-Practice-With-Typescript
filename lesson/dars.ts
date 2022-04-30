// arrays
let names = ["Zokirkhon", "Kotibkhonov", "Boburmirzo"];
names.push("Ibrokhim");
console.log(names);

// mixed Array
let mixed = ["ken", 5, "xan"];

// we can add only string and number
// we can not add boolean or other type of data
// mixed.push(false); error

// objects
let xan = {
  name: "Zokirkhon",
  belt: "black",
  age: 23,
};
// We can not add property outside the object

// 5

// explict types
let c: string;
let age: number;
let isLoggedIn: boolean;

// arrays
// I can not add any type of data without string;
let ninjas: string[] = [];

// union types
let mixed2: (string | number | boolean)[] = [];

mixed2.push("hello");
mixed2.push(23);
mixed2.push(false);
console.log(mixed2);
// I can not add other type of data;

let uid: string | number;
uid = 123;
uid = "123";

// objects

let ninjaOne: object;
ninjaOne = { name: "zokirkhon", age: 23 };
// it is ok;
ninjaOne = [];

// when it comes to this
let ninjaTwo: {
  name: string;
  age: number;
  beltColour: string;
};

ninjaTwo = {
  name: "string",
  age: 23,
  beltColour: "string",
};

// 6

let age6: any = 23;

age6 = { name: "hello" };

console.log(age6);

let mixed6: any[] = [];
mixed6.push(5);
mixed6.push("salom");
mixed6.push(false);
console.log(mixed6);

let ninja6: { name: any; age: any };

// 7
// Functions
let greet: Function;

greet = () => {
  console.log("salom Dunyo!");
};
greet();

const add = (
  a: number,
  b: number,
  c?: number | string,
  d: number | string | boolean = true
) => {
  console.log(a + b);
  console.log(c);
  console.log(d);
};

add(5, 20, "Dunyo");

const minus = (a: number, b: number): number => {
  return a + b;
};

let result = minus(10, 7);
console.log(result);
console.log(typeof result);

// Alias
type StrOrNum = string | number;
type objWithName = { name: string; uid: StrOrNum };

const logDetails8 = (uid: StrOrNum, item: string) => {
  console.log(`${item} has a uid of ${uid}`);
};
logDetails8("1235asda", "Zokirkhon");

const greet8 = (user: objWithName) => {
  console.log(`${user.name} says hello`);
};

// 8
// Function Signatures
// let greet10: Function;

// () => void

// ex1
let gree10: (a: string, b: string) => void;

gree10 = (name: string, greeting: string) => {
  console.log(`${name} says ${greeting}`);
};
gree10("Zokirkhon", "Salom");

// ex2
let calc10: (a: number, b: number, c: string) => number;
calc10 = (numOne: number, numTwo: number, action: string) => {
  if (action === "plus") {
    return numOne + numTwo;
  }
  return numOne - numTwo;
};
console.log(calc10(123, 3, ""));

// ex3
type person = { name: string; age: number };

let logDetails10: (obj: person) => void;

logDetails10 = (ninja: person) => {
  console.log(`${ninja.name} is ${ninja.age} years old.`);
};

logDetails10({ name: "Zokirkhon", age: 23 });

// 9
// // DOM
// const anchor = document.querySelector('a')!;

// console.log(anchor.href);
// console.log(anchor?.href);

// if (anchor) {
//     console.log(anchor.href);
// }

// const form = document.querySelector('form')!;
// const form = document.querySelector('.new-item-form'); /**returns form with it's childs as tag*/
// const form = document.querySelector('.new-item-form')!; /**returns form with it's methods */
const form = document.querySelector(
  ".new-item-form"
) as HTMLFormElement; /**returns form with it's childs as tag*/
// console.log(form.children);

// inputs
const type = document.querySelector("#type") as HTMLSelectElement;
const tofrom = document.querySelector("#tofrom") as HTMLInputElement;
const details = document.querySelector("#details") as HTMLInputElement;
const amount = document.querySelector("#amount") as HTMLInputElement;

form.addEventListener("submit", (e: Event) => {
  e.preventDefault();

  let obj = {
    type: type.value,
    tofrom: tofrom.value,
    details: details.value,
    amount: amount.valueAsNumber,
  };

  console.log(obj);
});

// 10

// classes
class Invoice {
  constructor(
    readonly client: string,
    private details: string,
    public amount: number
  ) {}
  format() {
    return `${this.client} owes $${this.amount} for ${this.details}`;
  }
}

const inv1 = new Invoice("Zokirkhon", "work on the Zokirkhon website", 400);
const inv2 = new Invoice("Boburmirzo", "work on the Boburmirzo website", 500);

let invoices: Invoice[] = [];
invoices.push(inv1);
invoices.push(inv2);

invoices.forEach((inv) => {
  console.log(inv.client, inv.amount, inv.format());
});

const form101 = document.querySelector(
  ".new-item-form"
) as HTMLFormElement; /**returns form with it's childs as tag*/

// inputs
const type101 = document.querySelector("#type") as HTMLSelectElement;
const tofrom101 = document.querySelector("#tofrom") as HTMLInputElement;
const details101 = document.querySelector("#details") as HTMLInputElement;
const amount101 = document.querySelector("#amount") as HTMLInputElement;

form.addEventListener("submit", (e: Event) => {
  e.preventDefault();

  console.log({
    type: type101.value,
    tofrom: tofrom101.value,
    details: details101.value,
    amount: amount101.valueAsNumber,
  });
});
