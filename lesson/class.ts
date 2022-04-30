// classes

interface Isperson {
    name: string,
    age: number,
    speak(a: string): void,
    spend(b: number): number;
  }
  
  const me: Isperson = {
    name: 'Zokirkhon',
    age: 23,
    speak(text: string): void {
      console.log(text)
    },
    spend(n: number): number {
      console.log(`I spent ${n}`)
      return n;
    }
  }
  
  console.log(me)



  // let docOne: HasFormatter;
// let docTwo: HasFormatter;

// docOne = new Invoice('khan','web work',250)
// docTwo = new Invoice('yoshi','plumbing work',300)


// let docs: HasFormatter[]=[];
// docs.push(docOne)
// docs.push(docTwo)

// console.log(docs)


/**
const inv1 = new Invoice("Zokirkhon", "work on the Zokirkhon website", 400);
const inv2 = new Invoice("Boburmirzo", "work on the Boburmirzo website", 500);

let invoices: Invoice[] = [];
invoices.push(inv1);
invoices.push(inv2);

invoices.forEach((inv) => {
  console.log(inv.client, inv.amount, inv.format());
});
 */
