import { Invoice } from "./classes/Invoice.js";
import { Payment } from "./classes/Payments.js";
import { HasFormatter } from "./interfaces/HasFormatter.js";
import { ListTemplate } from "./classes/ListTemplates.js";

// form
const form = document.querySelector(
  ".new-item-form"
) as HTMLFormElement; /**returns form with it's childs as tag*/

// inputs
const type = document.querySelector("#type") as HTMLSelectElement;
const tofrom = document.querySelector("#tofrom") as HTMLInputElement;
const details = document.querySelector("#details") as HTMLInputElement;
const amount = document.querySelector("#amount") as HTMLInputElement;

// list template instance
const ul = document.querySelector("ul")!;
const list = new ListTemplate(ul);

form.addEventListener("submit", (e: Event) => {
  e.preventDefault();
  if (
    type.value.length &&
    tofrom.value.length &&
    details.value.length &&
    amount.value.length
  ) {
    let values: [string, string, number] = [
      tofrom.value,
      details.value,
      amount.valueAsNumber,
    ];
    let doc: HasFormatter;

    if (type.value.toLowerCase() === "invoice") {
      doc = new Invoice(...values);
    } else {
      doc = new Payment(...values);
    }

    list.render(doc, type.value, "end");

    setTimeout(() => {
      tofrom.value = "";
      details.value = "";
      amount.value = "";
    }, 200);
  } else {
    alert("Please fill out all empty fields");
  }
});
